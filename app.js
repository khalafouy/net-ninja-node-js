
// Example on Global object 
let time = 0;
let timer = setInterval(function () {
    time++;
    console.log(time + ' seconds passed ');
    if(time > 5)
    clearInterval(timer);
}, 1000);


// Example about Normal function & function expression 

// normal function 
function sayHi()
{
    console.log("Welcome Man ");
}
sayHi();

// function expression
var sayBye = function sayHi()
{
    console.log("Bye Man ");
}
sayBye();
// Also function expression used for send function as paramters

function calFunction(fun)
{
    fun();
}
calFunction(sayBye);

