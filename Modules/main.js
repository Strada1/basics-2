import {OPERATIONS} from './operations.js';

let firstValue = document.querySelector('.firstValue');
let secondValue = document.querySelector('.secondValue');
let action = document.querySelector('.choose');
let result;
let operation_result = document.querySelector('.operation_result');
// function additional (){
//     result.addEventListener('click', function () {
//         let first = parseInt(firstPerem.value);
//         let second = parseInt(secondPerem.value);
//         let add = first + second;
//         alert(add);
//     })
// }

// function substraction () {
//     result.addEventListener('click', function(){
//         let first = parseInt(firstPerem.value);
//         let second = parseInt(secondPerem.value);
//         let sub = first - second;
//         alert(sub);
//     } )
// }

// function multi () {
//     result.addEventListener('click', function(){
//         let first = parseInt(firstPerem.value);
//         let second = parseInt(secondPerem.value);
//         let multi = first * second;
//         alert(multi);
//     } )
// }

// function division () {
//     result.addEventListener('click', function(){
//         let first = parseInt(firstPerem.value);
//         let second = parseInt(secondPerem.value);
//         let div = first/second;
//         alert(div);
//     } )
// }

// function chooseOperation () {
//     alert(multi.value);
// }
// let mm = document.getElementsByClassName('.operation_multi');
// alert(mm.innerHTML);     
// }
// // alert(select);
// chooseOperation();
// // division();
// // multi();
// substraction ();
// additional();


// second varioant

//second variant

operation_result.addEventListener('click', function () {
    switch(action.value) {
        case OPERATIONS.SUMM:
            result = +firstValue.value + +secondValue.value;
            break;
        case OPERATIONS.MULTI:
            result = +firstValue.value * +secondValue.value;
            break;
        case OPERATIONS.SUBSTRACT:
            result = +firstValue.value - +secondValue.value;
            break;
        case OPERATIONS.DIV:
            result = +firstValue.value / +secondValue.value;
        break;
    }
    let div = document.createElement('div');
    div.className = 'history';
    div.addEventListener('click', function(){
        div.remove();
    })
    div.innerHTML = `Результат равен: ${result}`;
    document.body.append(div);
} );



