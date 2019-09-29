// return response as json
var express = require('express');

var app = express();


app.get('/',function(req,res){
    res.send('home screen');
});

app.get('/contact',function(req,res){
    res.send('contact screen');
});

app.listen(3000);
console.log("server run");