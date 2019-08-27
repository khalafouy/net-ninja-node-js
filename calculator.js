

var sub = function(a , b){
    console.log(`The sub is ${a-b} `);
}

var add = function(a,b){
    console.log(`The sum  is ${a+b} `);
}

var pi = console.log(3.14);
// to export module functions
// 1 way
module.exports.sub = sub;
module.exports.add = add;
module.exports.pi = pi;

// 2 way
module.exports = {
    add:add,
    sub:sub,
    pi:pi
}