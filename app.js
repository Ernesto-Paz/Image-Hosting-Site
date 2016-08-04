var http = require("http");
var fs = require("fs");

var counter = 0;
var form = "";

function displayForm(res) {
    fs.readFile('form.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
                'Content-Length': data.length
        });
        res.write(data);
        res.end();
    });
}

var server = http.createServer(function(req, res){

}).listen(3000, function(){
console.log("Listening closely.");
});

    server.on("request", function(req, res){ 
    if(req.method.toLowerCase() == "get"){
    counter += 1;
    console.log("Got a request.", counter);
    console.log(req.url);
    displayForm(res);
    }
        
    if(req.method.toLowerCase() == "post"){
        req.pipe(res);

    
    }
    });