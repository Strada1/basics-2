import {add, result, divRes} from './add_deleteFn.js';

const number = {
    num1: document.querySelector('#num1'),
    num2: document.querySelector('#num2'),
};
const operators = {
    plus: '+',
    min: '-',
    div: '/',
    mult: '*',
};

const button = document.querySelector('.btn');
let operator = document.querySelector('#oper');


function calc() {
    switch(operator.value) {
        case operators.plus:
            result.innerHTML = Number(number.num1.value) + Number(number.num2.value);
            break;
        case operators.min:
            result.innerHTML = Number(number.num1.value) - Number(number.num2.value);
            break;
        case operators.mult:
            result.innerHTML = Number(number.num1.value) * Number(number.num2.value);
            break;
        case operators.div:
            result.innerHTML = Number(number.num1.value) / Number(number.num2.value);
            break;
    };
};



button.addEventListener('click', calc);
button.addEventListener('click', add);







