// buffer & streams 
// buffer is temprory storage used to slice data to bits and transfer it to client 
// increase preformance rather than waiting load whole data 

var fs = require('fs');

var readableStream = fs.createReadStream('text.txt', 'utf8');

readableStream.on('data', function (chunk) {
    console.log('New Chunk receievd');
    console.log(chunk);
});