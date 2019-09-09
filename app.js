// using pipe rather listen on readableStream then write it 
var fs = require('fs');

var readableStream = fs.createReadStream('readMe.txt', 'utf8');
var writeableStream = fs.createWriteStream('writeMe.txt');

readableStream.pipe(writeableStream);