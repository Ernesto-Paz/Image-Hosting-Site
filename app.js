var express = require('express');
var path = require('path');
var fs = require('fs');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var upload = require("./uploadsconfig.js").singleupload;
var albumupload = require("./uploadsconfig.js").albumupload;
var imageid = require("./uploadsconfig.js").imageid;
var db = require("./dbconfig/db.js");
var app = express();
// view engine setup

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
if (process.env.NODE_ENV == "development") {

    app.use("/node_modules", express.static(__dirname + '/node_modules'));

}
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/", express.static(__dirname + "/public/index"));
app.use("/public", express.static(__dirname + "/public"));

//Upload routes, will be moved to new router later
//for uploads multer stores the folder in req.imagefolder, the full directory in req.newdir, the url is stored in req.imgurl. req.imgurl + req.filename = the full url for img src purposes. 
app.post('/api/uploadnewimage', upload.single('image'), function (req, res) {
    console.log(req.filename);
    console.log("uploadpost");
    if (req.imgurl && req.filename) {
        db.image.create({
                title: req.body.title,
                fileid: req.imagename,
                filedir: req.newdir + req.filename
            })
            .then(function (todo) {
                console.log("Database insert successful.");
            })
            .catch(function (err) {
                console.log(err);
                console.log(err.stack)
            });
    }
    res.redirect('/');
});


//returns an array of the last ten images.
app.get("/api/last10images", function (req, res) {
    console.log("Last10");
    db.image.findAll({
        limit: 10,
        attributes: {
            exclude: ["filedir", "id"]
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

//looks up the :imagename param in the database to see if it finds a corresponding image
//then sends the image, does not send db record.
//later, this will also check for proper authentication if needed. 
app.get("/getimage/:imagename", function (req, res) {
    db.image.findOne({
        where: {
            fileid: req.params.imagename
        }
    }).then(function (image) {
        if (image) {
            console.log("Image Sent", req.params.imagename);
            res.sendFile(image.filedir);
        } else {
            let error = new Error("No Image Found in DB with imagename" + req.params.imagename);
            error.name = "Error GET /api/:imagename | Image not Found";
            throw error;
        }
    }).catch(function (err) {
        res.status(404).send(" 404 : No Image Found");
        console.log(err);
    });

});


//looks up information for a single image and sends db record to frontend.
app.get("/api/:imagename", function (req, res) {
    db.image.findOne({
        where: {
            fileid: req.params.imagename
        },
        attributes: {
            exclude: ["filedir", "id"]
        }

    }).then(function (image) {
        if (image) {
            res.json(image);
        } else {
            let error = new Error("No Image Found in DB with imagename" + req.params.imagename);
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

db.sequelize.sync().then(function () {
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