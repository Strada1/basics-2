function printNumbers(from, to) {
    let timerId = setInterval(function() {
        if(from == to) {
            clearInterval(timerId);
        } else {
            console.log(from++);
        }
    }, 1000)
}
printNumbers(10, 16);



function printNumbers(from, to) {
    let timerId = setTimeout(function() {
        if(from == to) {
            clearTimeout(timerId);
        } else {
            console.log(from++);
            printNumbers(from, to);
        }

    }, 1000);
};

printNumbers(2, 6);
