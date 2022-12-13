var http = require("http");
var fs = require("fs");
http.createServer(function(req,res){
fs.appendFile("demo.txt","IBM CLOUD \n",function(err){
    if (err) throw err;
    console.log("Saved");
});
}).listen(3000);