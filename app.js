// return response as json
var express = require('express');

var app = express();

app.set('view engine','ejs');
app.use('/assets',express.static('assets'));
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies


app.get('/',function(req,res){
    res.sendFile(__dirname+'/home.html');
});

app.get('/contact',function(req,res){
    
    res.render('contact',{qs:req.query});
});

app.post('/contact',function(req,res){
console.log(req.body);
});
app.get('/profile/:name?',function(req,res){
    var hobbies = ['eating','killing','hoping']; 
    res.render('profile',{name:req.params.name,hobbies:hobbies}); 
});

app.listen(3000);
console.log("server run");