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
let result = document.querySelector('.res');
let arr = [];

function calc() {
    let res = 0;
    switch(operator.value) {
        case operators.plus:
            res = Number(number.num1.value) + Number(number.num2.value);
            break;
        case operators.min:
            res = number.num1.value - number.num2.value;
            break;
        case operators.div:
            res = number.num1.value / number.num2.value;
            break;
            case operators.mult:
            res = number.num1.value * number.num2.value;
            break;
    }
    return res;
}

function addResToResult() {
    result.textContent = calc();
    arr.push(calc());
}

function addResToList() {
    let listResult = document.createElement('div');
    listResult.className = 'list_result';
    for(let item of arr) {
        listResult.append(item);
        listResult.textContent = item
    }
    result.after(listResult);

    let removeList = document.querySelectorAll('.list_result');
    for(let elem of removeList) {
        elem.addEventListener('click', removeFn);
    }
}


function removeFn() {
    this.remove();
}

button.addEventListener('click', calc);
button.addEventListener('click', addResToResult);
button.addEventListener('click', addResToList);