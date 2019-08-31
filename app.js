// http core  module exist by default in node
var http = require('http');

var server = http.createServer(function(request,response){
    console.log(request.url);
    response.writeHead(200,{'Content-type':'text\plain'});
    response.end("Welcome Man");
});

server.listen(3000,'127.0.0.1');
console.log("server run");