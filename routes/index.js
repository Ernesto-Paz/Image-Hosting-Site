var express = require('express');
var router = express.Router();
const util = require("util");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/upload", function(req, res, next){
var thedata = "";
    
request.on("data", function(data){
console.log("Data get");
console.log(data);
thedata += data
})
console.log(util.inspect(req.body));
request.on("end",function(){
res.send(thedata);
})
console.log(thedata);
console.log("Finished.");
});

module.exports = router;
