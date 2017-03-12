var fs = require('fs');
var stream = require("stream");
var path = require("path");
var fileType = require("file-type");
var gm = require("gm");
var crypto = require("crypto");
var globalvars = require("./globalvars");
//var fileType = require("file-type");
// this is a multer storage engine that will take an image and create a thumbnail before uploading both to s3
/*function getDestination(req, file, cb) {
    cb(null, '/dev/null')
}*/

var charset = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "$", "-", "+", "*", "_", "!", "(", ")"]

function converttobase60(int) {
    int = Math.abs(int);
    result = "";
    var counter = 0;
    if(int === 0){return charset[0]}
    while (int > 0) {
        if ((int % 60) === "undefined") {
            break;
        }
        console.log("Int is " + int + " divided by 60 is " + int / 60 + " remainder " + int % 60 + " Therefore " + int % 60 + "*60^" + counter.toString());
        result = charset[int % 60] + result;
        //console.log("Int " + int);
        int = int / 60
            //console.log("Int before rounding " + int);
        int = Math.floor(int);
        counter++;
        //console.log("Int after rounding " + int);
        //console.log(result);
    }
    //console.log(result);
    return result;
}

function generateFileId(req, file, cb) {
    fileId = converttobase60(globalvars.currentImageId);
    globalvars.currentImageId++;
    cb(null, fileId);
}

function defaultWhitelist(req, file, cb) {
    whitelist = [];

    cb(null, whitelist);
}

function getContentType(req, file, cb) {

    file.stream.once("data", (chunk) => {
        console.log(chunk);
        var type = fileType(chunk);
        file.stream.pause(); //after much reading and suffering, I learned that you need to pause the stream BEFORE unshifting or it triggers a data event and messes everything up.
        file.stream.unshift(chunk);
        if (type == null) {
            return cb("Error setting defaultContentType. Type of file could not be determined.");
        } else {
            return cb(null, type);
        }
    })

    /*file.stream.once("data", function (chunk) {
        var type = fileType(chunk); // {ext: extension, mime: "image/whatever"}
        console.log(type);
        file.stream.unshift(chunk); 
        if (type == null) {
            return cb("Error setting defaultContentType. Type of file could not be determined.");
        } else {
            return cb(null, type.mime);
        }
    })*/


}

function MyCustomStorage(opts) {
    this.s3 = opts.s3;
    this.getfileId = generateFileId;
    this.getBucket = opts.bucket;
    this.getWhitelist = (opts.whitelist || defaultWhitelist);
    this.getContentType = (opts.contentType || getContentType);
}

MyCustomStorage.prototype._handleFile = function _handleFile(req, file, cb) {
    /*var paramsMs3 = {
        Bucket: opts.bucket,
        Key: opts.key,
        ACL: opts.acl,
        CacheControl: opts.cacheControl,
        ContentType: opts.contentType,
        Metadata: opts.metadata,
        StorageClass: opts.storageClass,
        Body: (opts.replacementStream || file.stream)
    }*/
    console.log(globalvars);
    var that = this;
    var todo = [this.getContentType, this.getfileId];
    var results = [];
    var counter = 0;
    var completedUploads = 0;
    var fileObject = {};

    function finishUpload(fileInfo){
    completedUploads++;
    if(completedUploads == 2){
        cb(null, fileInfo); 
    }
        
        
    }
    function async(runme, index, cb) {
        return runme(req, file, function (err, info) {
            if (err) {
                console.log(err);
                return cb(err);
            }
            console.log("Looping...")
            console.log("Index..." + index);
            results[index] = info;
            counter += 1;
            if (counter === todo.length) {
                console.log("All functions done.")
                console.log(results);

                //build fileobject for delivery to route.
                fileObject.fileId = results[1]
                fileObject.key = results[1] + path.extname(file.originalname);
                fileObject.thumbnailKey = "small-" + fileObject.key;
                fileObject.contentType = results[0].mime;

                //all params fetched need two s3.upload one for thumbnail and one for main image.

                gm(file.stream).identify(function (err, value) {
                    console.log(value);
                });
                gm(file.stream).autoOrient().noProfile().resize(300, 300).stream(function (err, stdout, stderr) {
                    console.log(err);
                    console.log(stderr)
                    var params = {
                        Bucket: that.getBucket,
                        Key: "small-" + fileObject.key,
                        Body: stdout,
                        ContentType: fileObject.contentType,
                    };
                    that.s3.upload(params, function (err, data) {
                        console.log("WE DID IT! SMALL!")
                        console.log("Error", err);
                        finishUpload(fileObject);
                    });


                })
                var params = {
                    Bucket: that.getBucket,
                    Key: fileObject.key,
                    Body: file.stream,
                    ContentType: fileObject.contentType,
                };
                that.s3.upload(params, function (err, data) {
                    console.log("WE DID IT!")
                    console.log("Error", err);
                    finishUpload(fileObject);
                });
                

            }
        })
    }


    for (i = 0; i < todo.length; i++) {
        console.log(i);
        async(todo[i], i, function (err) {
            if (err) {
                console.log(err);
                return;
            }
        });

    }




    /*this.getDestination(req, file, function (err, path) {
        if (err) return cb(err)

        var outStream = fs.createWriteStream(path)
        //uploaded data is processed by file.stream.
        file.stream.pipe(outStream)
        outStream.on('error', cb)
        outStream.on('finish', function () {
            cb(null, {
                path: path,
                size: outStream.bytesWritten
            })
        })
    })*/
}

MyCustomStorage.prototype._removeFile = function _removeFile(req, file, cb) {
    this.s3.deleteObject({
        Bucket: file.bucket,
        Key: file.key
    }, cb)
}

module.exports = function (opts) {
    return new MyCustomStorage(opts)
}