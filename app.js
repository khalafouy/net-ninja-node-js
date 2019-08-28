var fs = require('fs');
// example of delete file 

fs.unlink('read.txt',function(){

});

// example of create dir 
fs.mkdir('stuff',function(){
    fs.rmdir('stuff',function(){
        
    });
});
