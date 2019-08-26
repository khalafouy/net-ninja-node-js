let time = 0;
let timer = setInterval(function () {
    time++;
    console.log(time + ' seconds passed ');
    if(time > 100)
    clearInterval(timer);
}, 1000);