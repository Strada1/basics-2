const OPERATIONS = {
    SUBSTRACT: '-',
    MULTI: '*',
    DIV: '/',
    SUMM: '+'
}

let firstValue = document.querySelector('.firstValue');
let secondValue = document.querySelector('.secondValue');
let action = document.querySelector('.choose');
let history = document.querySelector('.history');
let clear = document.querySelector('.clearButton');
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
    alert('he')
    let div = document.createElement('div');
    div.className = 'history';
    div.innerHTML = `Результат равен: ${result}`;
    document.body.append(div);
} );

// clear.addEventListener('click', function (){
//     for (let elem of document.body.children) {
//         if (elem.matches ('div')) {
//             alert("find div!");
//             elem.remove()
//         }
//     elem.remove();
//     }
// })



