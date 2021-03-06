var express = require('express');
var util = require("util")
var cookieSession = require('cookie-session');
var path = require('path');
var fs = require('fs');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var aws = require("aws-sdk");
var gm = require("gm");
var crypto = require("crypto");
var upload = require("./uploadsconfig.js").singleupload;
var albumupload = require("./uploadsconfig.js").albumupload;
var imageid = require("./uploadsconfig.js").imageid;
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var db = require("./models/index.js");

//command "dropalldb" to force sync and drop all data.
rl.on("line", function (text) {
    if (text == "dropalldb") {
        db.sequelize.sync({
            force: true
        }).then(function () {
            console.log("DB Ready")
        });

    }

});

var S3_BUCKET = "bucketofimageswithfries";
if (process.env.NODE_ENV !== "production") {
    var awsconfig = fs.readFileSync("awsconfig.json");
    awsconfig = JSON.parse(awsconfig);
    aws.config.update({
        secretAccessKey: awsconfig.secretAccessKey,
        accessKeyId: awsconfig.accessKeyId,
        region: awsconfig.region
    });
} else {
    aws.config.update({
        secretAccessKey: process.env.S3secretAccessKey,
        accessKeyId: process.env.S3accessKeyId,
        region: process.env.S3region
    });

}

var s3 = new aws.S3();
var app = express();
// view engine setup

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//this exposes node_modules during development, move required files to seperate public directory before publishing. Check public/index/index.html script tags for a list of files to be moved.
if (process.env.NODE_ENV == "development" || true) {

    app.use("/node_modules", express.static(__dirname + '/node_modules'));

}
app.use(logger('dev'));

//get cookieSession variables from process vars if we're in production use hard coded stuff if we're not
var cookieOptions = {};
if (process.env.NODE_ENV !== "production") {
    //example keys only used for development, safe to post on github.
    cookieOptions = {
        name: "session",
        keys: ["ALZxA1z5+=6660|F629w]>6Lf,|Hwb6FyQ-7-5~~W~2Ro6z$#'4N1sz4]I8uTI2"],
        secret: "ALZxA1z5+=6660|F629w]>6Lf,|Hwb6FyQ-7-5~~W~2Ro6z$#'4N1sz4]I8uTI2"
    };
} else {
    cookieOptions = {
        name: process.env.defaultCookieName,
        keys: [process.env.cookieSecret],
        secret: process.env.cookieSecret
    };
}

app.use(cookieSession(cookieOptions));



app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/", express.static(__dirname + "/public/index"));
app.use("/public", express.static(__dirname + "/public"));


//functions

//function that returns hasOwnPropety. Used for verifying that user inputted objects have certain properties. 
//Has to be done this way because you can't trust that a user submitted object will contain a hasOwnProperty method, the user could overwrite it.
function objectHasProp(obj, prop) {

    return Object.prototype.hasOwnProperty.call(obj, prop);

}

// Middleware functions


//This middleware check for a session cookie, if found it adds a session and user info to req.user. 
//Its used in routes that need user authentication to make user information available to them and to verify that the user is authenticated.
function authenticateUser(req, res, next) {
    console.log("Authenticate User Middleware");
    console.log(req.session);
    if (req.session) {
        //check session db and return associated user if found.
        db.session.findOne({
            where: {
                sessionId: req.session.userSession
            },
            include: [{
                model: db.user
            }]
        }).then(function (session) {
            if (session) {
                console.log("Valid Session Found!");
                req.user = session.user;
                return next();
            } else {
                console.log("Invalid Session!");
                res.status(401);
                res.send();
                return;
            }
        }, function (err) {
            console.log(error);
            res.status(401);
            res.send();
            return;
        });
    } else {
        //no session, user not authenticated. Error 401 Unauthorized.
        console.log("No session found.")
        res.status(401);
        res.send();
        return;

    }
}

function checkForSession(req, res, next) {
    console.log("Check for Session Middleware");
    console.log(req.session);
    if (req.session) {
        //check session db and return associated user if found.
        db.session.findOne({
            where: {
                sessionId: req.session.userSession
            },
            include: [{
                model: db.user
            }]
        }).then(function (session) {
            if (session) {
                console.log("Valid Session Found!");
                req.user = session.user;
                res.status(200);
                return next();
            } else {
                console.log("Invalid Session!");
                return next();
            }
        }, function (err) {
            console.log(error);
            return next();
        });
        return;
    } else {
        //no session, user not authenticated. Error 401 Unauthorized.
        console.log("No session found.")
        return next();

    }

}

function getImageScore(imageId, userId) {

    return new Promise(function (resolve, reject) {

        if (userId) {
            var includes = [{
                model: db.vote,
                where: {
                    userId: userId,
                    imageId: imageId
                },
                attributes: {
                    include: ["vote"]

                },
                required: false
            }];

        } else {
            var includes = [];

        }

        db.image.findOne({
            where: {
                id: imageId,
            },
            attributes: ["score", "upvote", "downvote"],
            include: includes
        }).then(function (voteinfo) {
            if (voteinfo) {
                voteinfo.get({
                    plain: true
                });
                console.log(voteinfo);
                voteinfo.uservote = voteinfo.votes.vote;
                delete voteinfo.vote;
                resolve(voteinfo);
            } else {
                reject({
                    score: 0,
                    upvote: 0,
                    downvote: 0
                });


            }

        })



        /*    var includes = [];
            if (userId) {
                includes = [{
                    model: db.user,
                    where: {
                        id: userId
                    },
                    required: false,
                    attributes: ["id"]
                }]
            }
            db.vote.findAll({
                where: {
                    imageId: imageId
                },
                include: includes,
                raw: true
            }).then(function (votesarray) {

                function votecounter(votesarray, index, storageobject) {
                    if (typeof storageobject == "undefined") {
                        storageobject = {};
                        storageobject.upvote = 0;
                        storageobject.downvote = 0;
                    }
                    if (votesarray[index]["user.id"] !== null) {
                        storageobject.uservote = votesarray[index].vote
                    }
                    if (votesarray[index].vote == 1) {
                        storageobject.upvote++;
                    } else if (votesarray[index].vote == -1) {
                        storageobject.downvote--;
                    }

                    if (index < votesarray.length) {
                        index++;
                        if (index >= votesarray.length) {
                            storageobject.score = storageobject.downvote + storageobject.upvote;
                            console.log(storageobject);
                            resolve(storageobject);
                        } else {
                            if (index % 5 === 0) {
                                process.nextTick(() => votecounter(votesarray, index, storageobject));
                            } else {
                                votecounter(votesarray, index, storageobject);
                            }
                        }
                    }
                }
                if (votesarray.length > 0) {
                    votecounter(votesarray, 0);
                } else {
                    var votecount = {};
                    votecount.upvote = 0;
                    votecount.downvote = 0;
                    votecount.score = 0;
                    console.log(votecount);
                    resolve(votecount);
                }
            })*/

    });

}


//Express Routes


//Registers new user accounts.
app.post("/users/registernewuser", upload.none(), function (req, res) {
    //cannot trust that hasOwnProperty will exist because object is submitted by user could allow for hasOwnProperty to be overwritten. Move hasOwnProperty to a seperate function.
    if (objectHasProp(req.body, "username") && objectHasProp(req.body, "password")) {
        //process data to create a new user account. Send either success or failure back to front end.
        db.user.create({
            username: req.body.username,
            password: req.body.password
        }).then(function (user) {
            res.send({servermsg:"Success"});
        }, function (err) {
            console.log(err);
            res.send({servermsg:"Error"});
        })

    }



})

//Logs in user accounts.
app.post("/users/login", upload.none(), function (req, res) {
    if (objectHasProp(req.body, "username") && objectHasProp(req.body, "password")) {

        //process credentials and return a session cookie or handle rejection.
        var body = {
            username: req.body.username.toLowerCase(),
            password: req.body.password
        };
        db.user.authenticateUser(body).then(function (user) {
            crypto.randomBytes(128, (err, bytes) => {
                if (err) {
                    console.log(err);
                    res.send("Error: Unable to generate random bytes.");
                    return;
                }
                req.session.userSession = bytes.toString("base64");
                res.status(200);
                db.session.create({
                    sessionId: req.session.userSession,
                    userId: user.id
                });
                res.json({
                    login: true,
                    username: user.username
                });

            })
        }, function (err) {
            console.log(err);
            res.json({
                login: false
            });
        });


    }
});

//Logs out users
app.post("/users/logout", upload.none(), authenticateUser ,function(req, res){
    //logout users here.
    db.session.findOne({where: {userId: req.user.id}}).then(function(session){
        
        return session.destroy();
        
    }).then(function(){
        req.session = null;
        res.status(200).end();
    })
    
    
    
});


//Upload routes, will be moved to new router later
//for uploads multer stores the folder in req.imagefolder, the full directory in req.newdir, the url is stored in req.imgurl. Uploads to Amazon S3.
app.post('/api/uploadnewimage', authenticateUser, upload.single('image'), function (req, res) {
    var upload = upload.single("image")
    if (!req.user) {
        req.user.userId == null;
    }
    console.log(req.file);
    if (!req.file) {
        console.log("No req.file")
        res.end();
        return;
    }
    if (req.file.key && req.file) {
        console.log("creating new image in db");
        db.image.create({
                title: req.body.title,
                key: req.file.key,
                fileId: req.file.fileId,
                thumbnailKey: req.file.thumbnailKey,
                userId: req.user.id
            })
            .then(function (image) {
                res.status(200);
                res.end();
            })
            .catch(function (err) {
                console.log(err);
                console.log(err.stack)
            });
    } else {
        console.log("Error upload.")
        res.end();

    }
});


// CURRENTLY UNUSED. returns an array of the last ten images used for debugging only atm can remove if need be.
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

//returns most recent images in groups of 30, accepts 1 parameter for pagination. Used by Angular 2. Currently returns limited user associations as well.

app.get("/api/recentimages/:page", checkForSession, function (req, res) {
    if (req.params.page == "undefined") {
        req.params.page = 0;
    }
    console.log("Recent images " + req.params.page + ".");

    db.image.findAll({
        limit: 30,
        where: {
            privacy: "Public"
        },
        order: [["createdAt", "DESC"]],
        attributes: {
            exclude: ["fileDir", "id", "userId", "updatedAt"]
        },
        offset: req.params.page * 30,
        /*include: [{
        model: db.user,
        attributes: {
            exclude: ["passwordHash", "id", "createdAt", "updatedAt"]
        },
                 }, {
            model: db.vote,
            attributes: ["vote"],
        }]*/
    }).then(function (images) {

        if (images) {
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
            $or: [{
                key: req.params.key
            }, {
                thumbnailKey: req.params.key
            }]

        }
    }).then(function (image) {

        if (image) {
            var requestedImage = image.key
            if (req.params.key.indexOf("small-") !== -1) {
                requestedImage = image.thumbnailKey

            }
            s3.getObject({
                    Key: requestedImage,
                    Bucket: "bucketofimageswithfries"
                }, function (err, data) {
                    if (err) {
                        console.log(err);
                        res.status(404);
                        res.end();
                        return;
                    }

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
    });

});


//looks up information for a single image and sends db record to frontend. Needs to be updated.
app.get("/api/:fileId", checkForSession, function (req, res) {

    db.image.findOne({
        where: {
            fileId: req.params.fileId
        },
        attributes: {
            exclude: ["id", "userId", "privacy", "createdAt", "updatedAt"]
        },
        include: [{
            model: db.user,
            attributes: {
                exclude: ["passwordHash", "id", "createdAt", "updatedAt"]
            }
                 }]

    }).then(function (image) {
        if (req.user && image) {
            db.vote.findOne({
                where: {
                    imageId: image.id,
                    userId: req.user.id
                },
                attributes: {
                    include: ["vote"]
                }
            }).then(function (foundvote) {
                if (foundvote) {
                    image = image.get({
                        plain: true
                    });
                    image.uservote = foundvote.vote;
                    image.url = "/getimage/" + image.key;
                    res.json(image);
                } else {
                    image = image.get({
                        plain: true
                    });
                    image.url = "/getimage/" + image.key;
                    res.json(image);
                }
            })


        } else if (image) {
            image = image.get({
                plain: true
            });
            image.url = "/getimage/" + image.key;
            res.json(image);

        } else {
            let error = new Error("No Image Found in DB with imagename" + req.params.fileId);
            error.name = "Error GET /api/imageinfo/:imagename | Image not Found";
            throw error;
        }
    })
})

app.get("/api/getscore/:id", checkForSession, function (req, res) {
    console.log(req.params.id)
    if (req.user) {
        getImageScore(req.params.id, req.user.id).then(function (imagescore) {
            res.json(imagescore);
        })
    } else {
        getImageScore(req.params.id).then(function (imagescore) {
            res.json(imagescore);
        });
    }
})

app.get("/api/user/checksession/", checkForSession, function (req, res) {
    //will return user info to front end or userobject with a lot of nulls.
    if (req.user) {
        res.json({
            username: req.user.username,
            adminLevel: req.user.adminLevel
        });
    } else {
        res.json({
            username: null,
            adminLeveL: null
        });
    }
})

//get all images relating to user for display on users profile under submitted images or if viewed by another user or an unauthenticated user, only display public images.
app.get("/api/user/:username", checkForSession, function (req, res) {
        console.log(req.user.username);
        console.log(req.params.username);
        if (req.user) {
            if (req.user.username === req.params.username) {
                //send data including private images.
                db.user.findOne({
                    where: {
                        username: req.params.username,
                    },
                     attributes:["username", "adminLevel", "createdAt"],
                    include: [{
                        model: db.image,
                        attributes:{
                            exclude:["id"]
                        }
                    }]
                }).then(function(userInfo){
                    if(!userInfo){
                        res.status(404);
                        res.send();
                    }
                    else{  
                        
                    res.status(200).send(userInfo);
                        
                        
                    }
                    
                    
                })

            } else {
                    
                db.user.findOne({
                    where:{username: req.params.username},
                    attributes:["username", "adminLevel", "createdAt"],
                    include:[{
                        model:db.image,
                        where:{
                            privacy:"Public"
                        }, 
                        attributes:{
                            exclude:["id"]
                        } 
                             }]
                                
                                }).then(function(publicInfo){
                    
                                if(!publicInfo){
                                    res.status(404);
                                    res.send();
                                    
                                }
                                else{
                                    res.status(200).send(publicInfo);
                                    
                                    
                                }
                    
                })
                //send only Public Albums and Public Images.


            }


        }




    })
    //This api call will submit both positive and negative votes. It will not take an integer, it will take a boolean. This avoids issues with people sending integers and stuff.
app.post("/api/submitvote/:key", authenticateUser, function (req, res) {
    if (req.body.vote === true) {
        req.body.vote = 1
    } else if (req.body.vote === false) {
        req.body.vote = -1
    } else if (req.body.vote === null) {
        req.body.vote = 0
    } else {
        res.status(400).send({servermsg:"Bad Request : You know what you did."});
    }


    db.image.findOne({
            where: {
                key: req.params.key
            }
        }).then(function (image) {
            if (!image) {
                res.status(400);
                res.send({servermsg:"Bad Request : No such image."});
                return;
            } else {
                req.image = image;
                return db.vote.findOne({
                    where: {
                        imageId: req.image.id,
                        userId: req.user.id
                    }
                });

            }


        }).then(function (voterecord) {
            if (!voterecord) {
                //no vote record, create new vote record change image to match.
                db.vote.create({
                    userId: req.user.id,
                    imageId: req.image.id,
                    vote: req.body.vote
                }).then(function (newvote) {
                    if (newvote.vote === 1) {
                        req.image.increment({
                            upvote: 1,
                            score: 1
                        });
                    } else if (newvote.vote === -1) {
                        req.image.increment({
                            downvote: 1,
                            score: -1
                        });
                    }
                    res.status(200).send({
                        servermsg: "All done."
                    });
                    return;
                })
            } else { //else vote record found.
                if (voterecord.vote !== req.body.vote) {
                    //vote record doesn't match user submitted vote, change record in both vote and image.
                    var oldvote = voterecord.vote;
                    voterecord.update({
                        vote: req.body.vote
                    }).then(function (updatedvote) {

                        //undo the old vote
                        if (updatedvote) {
                            if (oldvote === 1) {

                                req.image.increment({
                                    upvote: -1,
                                    score: -1
                                });
                            } else if (oldvote === -1) {

                                req.image.increment({
                                    downvote: -1,
                                    score: 1
                                });

                            }
                            //then update with the new vote.
                            if (updatedvote.vote === 1) {

                                req.image.increment({
                                    upvote: 1,
                                    score: 1
                                });

                            }

                            if (updatedvote.vote === -1) {

                                req.image.increment({
                                    downvote: 1,
                                    score: -1
                                });

                            }
                        }

                        res.status(200).send({
                            servermsg: "All done."
                        })

                    })
                } else {
                    res.status(400).send("Bad Request: No change in vote.");
                    return;
                }
            }



        })
        /*.then(function (newvote) {
                if (newvote) {
                    //modify image entry to match vote changes
                    
                    res.status(200).send({
                        servermsg: "All done."
                    });
                    return;
                }
            })*/

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

//creates missing tables does not drop old tables unless you run force:true
db.sequelize.sync({}).then(function () {
    console.log("DB Ready")
        /* bulkcreate to fill db for testing if needed
            var entry = {
            vote: 1,
            userId:1,
            imageId:3 
            }
            var array = [];
            for(i=0;i<1000;i++){
            if(Math.random() < .4){entry.vote = 1;}
            else{entry.vote = -1;}
            array.push(entry);  
            }
            
            db.vote.bulkCreate(array).then(function(entries){console.log("DB filled.")});
            */
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