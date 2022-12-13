var http = require("http");
var dm = require('./demoMod');
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write("Date and time as of now is "+ dm.myDateTime());
    res.end();
}).listen(2020);