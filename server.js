var express = require("express");
var app = express();
app.get('/home',function(req,res){
    res.end('Hello World!');
});
app.listen(8080,function(){
    console.log("Example port listens to 8080");
});