var express = require('express');
var path = require('path');
var fs = require('fs');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var aws = require("aws-sdk");
var gm = require("gm");
var upload = require("./uploadsconfig.js").singleupload;
var albumupload = require("./uploadsconfig.js").albumupload;
var imageid = require("./uploadsconfig.js").imageid;
var db = require("./dbconfig/db.js");

var S3_BUCKET = "bucketofimageswithfries";
var awsconfig = fs.readFileSync("awsconfig.json");
awsconfig = JSON.parse(awsconfig);
aws.config.update({
    secretAccessKey: awsconfig.secretAccessKey,
    accessKeyId: awsconfig.accessKeyId,
    region: awsconfig.region
});

var s3 = new aws.S3();
var app = express();
// view engine setup

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
if (process.env.NODE_ENV == "development" || true ) {

    app.use("/node_modules", express.static(__dirname + '/node_modules'));

}
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/", express.static(__dirname + "/public/index"));
app.use("/public", express.static(__dirname + "/public"));


//functions

function objectHasProp (obj, prop){
    
return Object.prototype.hasOwnProperty.call(obj, prop);
    
}


//Registers new user accounts.
app.post("/users/registernewuser", upload.none(), function (req, res){
    //cannot trust that hasOwnProperty will exist because object is submitted by user could allow for hasOwnProperty to be overwritten. Move hasOwnProperty to a seperate function.
    if(objectHasProp(req.body, "username") && objectHasProp(req.body, "password")){
        //process data to create a new user account. Send either success or failure back to front end.
        db.user.create({
            username: req.body.username,
            password: req.body.password 
        }).then(function(user){
        res.send("Success");
        
        }, function(err){
        console.log(err);
        res.send("Failed");
        
        })
        
    }
    
    
    
})

//Logs in user accounts.
app.post("/users/login", upload.none(), function (req, res){
   console.log(req.body);
    if(objectHasProp(req.body, "username") && objectHasProp(req.body, "password")){
        
        //process credentials and return a session ID or handle rejection.
        var body = {username: req.body.username, password: req.body.password};
        db.user.authenticateUser(body).then(function(user){
            res.send(user);
        }, function(err){
            res.send(err);
            
            
        });
        
        
    }
})


//Upload routes, will be moved to new router later
//for uploads multer stores the folder in req.imagefolder, the full directory in req.newdir, the url is stored in req.imgurl. Uploads to Amazon S3.
app.post('/api/uploadnewimage', upload.single('image'), function (req, res) {
    console.log(req.file);
    if (req.fileId && req.file) {
        db.image.create({
                title: req.body.title,
                fileId: req.fileId,
                key: req.file.key
            })
            .then(function (image) {
            console.log(image);
            res.status(200);
            res.end();
            })
            .catch(function (err) {
                console.log(err);
                console.log(err.stack)
            });
    }
});


//returns an array of the last ten images.
app.get("/api/last10images", function (req, res) {
    db.image.findAll({
        limit: 10,
        attributes: {
            exclude: ["fileDir", "id"]
        }
    }).then(function (images) {
        if (images) {
            res.json(images);
        } else {
            res.status(404).end();
        }
    }, function (err) {
        console.log("Something went wrong with app.get /images db retrieval.");
        if (err) {
            console.log(err);
        }
    })

});

//returns most recent images in groups of 30, accepts 1 parameter for pagination

app.get("/api/recentimages/:page", function (req, res) {
if(req.params.page == "undefined"){
req.params.page = 0;
}
console.log("Recent images " + req.params.page + ".");
db.image.findAll({limit: 30, order:[["createdAt", "DESC"]], attributes:{exclude: ["fileDir", "id"]}, offset: req.params.page * 30 }).then(function (images) {
        if (images) {
            console.log(images.length);
            res.json(images);
        } else {
            res.status(404).end();
        }
    }, function (err) {
        console.log("Something went wrong with app.get /recentimages db retrieval.");
        if (err) {
            console.log(err);
        }
    });



});

//looks up the :imagename param in the database to see if it finds a corresponding image
//then sends the image, does not send db record.
//later, this will also check for proper authentication if needed. 
app.get("/getimage/:key", function (req, res) {
    db.image.findOne({
        where: {
            key: req.params.key
        }
    }).then(function (image) {
        if (image) {
            
            s3.getObject({Key: image.key, Bucket: "bucketofimageswithfries"}, function(err, data){
            if(err){
            console.log(err);
            res.status(404);
            res.end();
            return;
            }    
            
            console.log(data);
            res.type(path.extname(image.key));
            res.send(data.Body);
                
            })
            //use key to retrieve signed url from Amazon S3 then serve to user
            /*
            console.log(image.fileDir);
            res.sendFile(image.fileDir);
            */
        } else {
            let error = new Error("No Image Found in DB with imagename " + req.params.key);
            error.name = "Error GET /getimage/:imagename | Image not Found";
            throw error;
        }
    }).catch(function (err) {
        res.status(404).send(" 404 : No Image Found");
        console.log(err);
    });

});


//looks up information for a single image and sends db record to frontend.
app.get("/api/:fileId", function (req, res) {
    db.image.findOne({
        where: {
            fileId: req.params.fileId
        },
        attributes: {
            exclude: ["fileDir", "id"]
        }

    }).then(function (image) {
        if (image) {
            res.json(image);
        } else {
            let error = new Error("No Image Found in DB with imagename" + req.params.fileId);
            error.name = "Error GET /api/imageinfo/:imagename | Image not Found";
            throw error;
        }
    }).catch(function (err) {
        res.status(404).send("404 : No Image Found");
        console.log(err);
    });

});


app.get('/*', function (req, res) {
    console.log("Unknown request, sending to Angular 2", req.originalUrl);
    res.sendFile(__dirname + '/public/index/index.html');
});

//app.use('/', routes);
//app.use('/users', users);

// catch 404 and forward to error handler

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

db.sequelize.sync({force:true}).then(function () {
    app.listen(function () {
        console.log("Listening on " + app.locals.port);
    });
});


// error handlers
/*
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
*/

module.exports = app;