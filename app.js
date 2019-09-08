// buffer & streams 
// buffer is temprory storage used to slice data to bits and transfer it to client 
// increase preformance rather than waiting load whole data 

var fs = require('fs');

var readableStream = fs.createReadStream('readMe.txt', 'utf8');
var writeableStream = fs.createWriteStream('writeMe.txt');

readableStream.on('data', function (chunk) {
    console.log('New Chunk receievd');
    console.log(chunk);
    writeableStream.write(chunk);
});