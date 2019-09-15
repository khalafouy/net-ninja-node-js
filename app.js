// basic routing
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request,response){
    if(request.url === '/home' || request.url === '/')
    {
        response.writeHead(200,{'Content-type':'text\html'});
        fs.createReadStream('home.html').pipe(response);
    }
    else if(request.url === '/contact')
    {
        response.writeHead(200,{'Content-type':'text\html'});
        fs.createReadStream('contact.html').pipe(response);
    }
    else if(request.url === '/api')
    {
        response.writeHead(200,{'Content-type':'application\json'});
        var object = [{name:"khalaf",job:"developer",age:12},{name:"basma",job:"doctor",age:131}];
        response.end(JSON.stringify(object));   
    }
    else
    { 
       response.writeHead(404,{"Content-Type":'text\html'}); 
       fs.createReadStream(__dirname+'/404.html').pipe(response);
    }
});

server.listen(3000,'127.0.0.1');
console.log("server run");