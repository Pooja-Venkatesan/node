var express = require("express");
var app = express();
app.use('/things',function(req,res,next){
    console.log("Request received at : "+ Date.now());
    next();
});
app.get('/things',function(req,res){
    res.send("THINGS");
});
app.listen(8080);

