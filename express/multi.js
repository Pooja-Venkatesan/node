var express = require("express");
var app = express();

app.get("/hello",function(req,res){
    res.send("Hey");
});

app.post('/hello',function(req,res){
    res.send("You called post method!");
});
app.listen(8080);

