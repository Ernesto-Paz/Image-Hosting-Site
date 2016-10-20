var multer = require('multer');
var fs = require('fs');
var path = require('path');

var id = 10000;
newdir = __dirname + "/uploads/";
fs.mkdir(newdir, (err) => {
if(err && err.code != "EEXIST"){console.log(err); throw err;}
else if (err.code == "EEXIST"){
console.log("Directory already created. Folder ready.");
}
else{
console.log("Created upload directory successfully. No errors.");
}
}); 
// this id is local to this file and is only for naming purposes, in production it will be saved and loaded on server start up ensuring every image has a unique id.

function removebase64padding(fileid){
var trimmedId;
if(fileid.endsWith("=")){
fileid = fileid.slice(0, -1)
return removebase64padding(fileid);
}else{
trimmedId = fileid;
return trimmedId;
}
}

/* images are stored in a url in the same name as the image first the url is found by base64 encoding the current
image id number. The URL plus the file extension gives us the file name of the uploaded file on the server. For
example localhost:3000/newimage/newimage.jpg */

var storage = multer.diskStorage({
destination: function(req, file, cb){
console.log(req.body);
console.log(file);
if( file && req.body){
console.log(id);
req.imgid = id;
id++;
}
//todo: condense these two req.imagename into a single function that returns the trimmed fileid.
req.imagename = Buffer.from(req.imgid.toString()).toString('base64'); 
req.imagename = removebase64padding(req.imagename);   
cb(null, req.newdir);
},   
filename: function(req, file, cb){ 
fileextension = path.extname(file.originalname);
req.filename = req.imagename + fileextension;
req.imgurl = "/uploads/" + req.filename;
cb(null, req.filename);
}
});

/*

This second function is similar in function to the first, only it handles multi image uploads. These should be
 handled such that all images go into the same folder but have different image names. For example, localhost:3000/newimage/newimage.jpg and localhost:3000/newimage/newimage2.jpg are both part of the same album.
 
 */
var albumstorage = multer.diskStorage({
    
destination: function(req, file, cb){
req.filename = req.imagefolder;
var newdir = __dirname + "/uploads/" + req.filename;
fs.mkdir(newdir, (err) => {
if(err && err.code != "EEXIST"){throw err;}
cb(null, newdir);
});  
//cb(null, "some string or string type var") //where to put the file
},   
filename: function(req, file, cb){  
fileextension = path.extname(file.originalname);
console.log(req.filename + fileextension);
cb(null, req.filename + fileextension);
}
});

exports.singleupload = multer({ storage: storage });
exports.albumupload = multer({storage: albumstorage});
