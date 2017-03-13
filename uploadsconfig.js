var multer = require('multer');
var multerS3 = require('multer-s3');
var s3StorageEngine = require("./s3StorageEngine.js")
var aws = require ('aws-sdk');
//configuring S3 for launch.
var fs = require ('fs');

if(process.env.NODE_ENV !== "production"){
var awsconfig = fs.readFileSync("awsconfig.json");
awsconfig = JSON.parse(awsconfig);
aws.config.update({
    secretAccessKey: awsconfig.secretAccessKey,
    accessKeyId: awsconfig.accessKeyId,
    region: awsconfig.region
});
}
else{
aws.config.update({
    secretAccessKey: process.env.S3secretAccessKey,
    accessKeyId: process.env.S3accessKeyId,
    region: process.env.S3region
});
    
}
var s3 = new aws.S3();

var fs = require('fs');
var path = require('path');


/*//outdated chunk of code was used during prototyping when image storage was local.
var id = 10000;
newdir = __dirname + "/uploads/";
fs.mkdir(newdir, (err) => {
    if (err) {
        if (err.code != "EEXIST") {
            console.log(err);
            throw err;
        }
        else if (err.code == "EEXIST") {
        console.log("Directory already created. Folder ready.");
        } 
    }else {
        console.log("Created upload directory successfully. No errors.");
    }
});*/

// this id is local to this file and is only for naming purposes, in production it will be saved and loaded on server start up ensuring every image has a unique id.

function removebase64padding(fileId) {
    var trimmedId;
    if (fileId.endsWith("=")) {
        fileId = fileId.slice(0, -1)
        return removebase64padding(fileId);
    } else {
        trimmedId = fileId;
        return trimmedId;
    }
}

/* images are stored in a url in the same name as the image first the url is found by base64 encoding the current
image id number. The URL plus the file extension gives us the file name of the uploaded file on the server. For
example localhost:3000/newimage/newimage.jpg */

var storage = s3StorageEngine({
    s3: s3,
    bucket:"bucketofimageswithfries",
    
    //in converting to s3 this key function should return the key for the file in the bucket. Ideally usning Date.now() to avoid duplicates.
    /*key: function (req, file, cb) {
        fileextension = path.extname(file.originalname);
        //currently using Data.now in order to generate unique ids for images, look for a better method.
        req.fileId = removebase64padding(Buffer.from(Date.now().toString()).toString('base64'))
        req.filename = req.fileId + fileextension;
        cb(null, req.filename);
    }*/
});

/*

This second function is similar in function to the first, only it handles multi image uploads. These should be
 handled such that all images go into the same folder but have different image names. For example, localhost:3000/newimage/newimage.jpg and localhost:3000/newimage/newimage2.jpg are both part of the same album.
 
 */
var albumstorage = multer.diskStorage({

    destination: function (req, file, cb) {
        req.filename = req.imagefolder;
        var newdir = __dirname + "/uploads/" + req.filename;
        fs.mkdir(newdir, (err) => {
            if (err && err.code != "EEXIST") {
                throw err;
            }
            cb(null, newdir);
        });
        //cb(null, "some string or string type var") //where to put the file
    },
    filename: function (req, file, cb) {
        fileextension = path.extname(file.originalname);
        console.log(req.filename + fileextension);
        cb(null, req.filename + fileextension);
    }
});

exports.singleupload = multer({
    storage: storage,
    fileFilter: function(req, file, cb){
        console.log(file);
        if(file.mimetype === "image/gif" || file.mimetype === "image/jpeg" || file.mimetype === "image/gif" || file.mimetype === "image/png"){
        return cb(null,true);
        }else{
            return cb(null, false);
        }
    
    
    },
    limits:{
    fileSize: 3 * 1024 * 1024    
        
    }
});
exports.albumupload = multer({
    storage: albumstorage
});