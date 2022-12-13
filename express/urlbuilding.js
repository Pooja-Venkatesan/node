var express= require("express");
var app=express();
app.get("/:id",function(req,res){
    res.send("The id specified is "+ req.params.id);
    res.end();
});
app.listen(8080);