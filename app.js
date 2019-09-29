// return response as json
var express = require('express');

var app = express();

app.set('view engine','ejs');


app.get('/',function(req,res){
    res.sendFile(__dirname+'/home.html');
});

app.get('/contact',function(req,res){
    res.sendFile(__dirname+'/contact.html');
});


app.get('/profile/:name',function(req,res){
    res.render('profile',{name:req.params.name});
});

app.listen(3000);
console.log("server run");