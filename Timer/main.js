// function sayHi () {
//     console.log('Hi!')
// }

// setTimeout(sayHi,1000);
// setInterval(sayHi, 1000);
// setTimeout(clearInterval, 2000);
// let date = Date.now();
// console.log(date);


// function printNumbers(from, to){
//     let current = from;
    
//     setTimeout (function go() {
//         console.log(current);
//         if (current < to) {
//             setTimeout (go, 1000);
//             // console.log(current);
//         }
//         current++;
//     }, 1000);
// }

// printNumbers(1, 5);

function printNumbers (from, to) {
    let current = from;

    let timerId = setInterval (function() {
        console.log(current);
        if (current == to) {
            console.log(clearInterval(timerId));
        }
        current++;
    }, 1000);

}

printNumbers(1,5);