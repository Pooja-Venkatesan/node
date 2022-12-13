var http=require("http");
var fs = require("fs");
http.createServer(function(req,res){
fs.readFile("demo.txt",function(err,data){
if (err) throw err;

console.log(data);
});
}).listen(8080);