var http = require("http");
var uc = require("uppercase");
http.createServer(function(req,res){
    res.write(uc("hello pooja venkatesan"));
    res.end();
}).listen(8080);