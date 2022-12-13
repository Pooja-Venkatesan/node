var http = require("http");
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/plain"});
    //res.end("Hello World");
    res.end("changed!");
}).listen(3000);
