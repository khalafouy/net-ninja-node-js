// return response as json
var http = require('http');

var server = http.createServer(function(request,response){
    console.log(request.url);
    response.writeHead(200,{'Content-type':'application\json'});
    var object = {name:"khalaf",job:"developer",age:12};
    response.end(JSON.stringify(object));
});

server.listen(3000,'127.0.0.1');
console.log("server run");