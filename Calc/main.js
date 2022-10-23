// Simple calc with if
// Просто мои начальные варианты калькуляторов, не обращай внимания

function calc(action, first, second) {
    if (action == '+') {
        return +first + +second;
    } else if (action == '-') {
        return first - second;
    } else if (action == '*') {
        return first * second;
    }
}
console.log(calc('*',1,2));


function calc(action, a, b) {
    a = Number(a);
    b = Number(b);
    
    if (action == '+') {
        return a + b
    } else if (action == '-') {
        return a - b
    } else if (action == '*') {
      return a * b
    } else if (action == '/') {
        if (b == 0) {
        alert('На 0 делить нельзя');
        } else return a / b
    }
    }
    
    console.log(calc('/', 6, 0)); 


//Калькулятор через if

let a = prompt('Введите первое число', '');
let action = prompt('Операция');
let b = prompt('Введите второе число', '');

function calc(action, a, b) {

    a = Number(a);
    b = Number(b);
    
    if (action == '+') {
        return a + b
    } else if (action == '-') {
        return a - b
    } else if (action == '*') {
        return a * b
    } else if( action == '/') {
        if (b == 0) {
            alert('На 0 делить нельзя');
        } else {
            return a / b
        }
    }
}

alert(calc(action, a, b)); 

// Калькулятор через switch

let first = +prompt('Введите первое число');
let operation = prompt('Выберете операцию: +, -, *, /', '');
let second = +prompt('Введите второе число');

function calc(operation, first, second) {
    switch(operation) {
    case '+':
        return first + second
        break;
    case '-':
        return first - second
        break;
    case '*':
        return first * second
        break;
    } 
}

alert(calc(operation, first, second));


// Калькулятор через вынесения результата в переменную 

function calc(option, a, b) {
    let result;
    a = Number(a);
    b = Number(b);
    if (isNaN(a) || isNaN(b)) {
        result = 'Это не число';
        } else switch(option) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
    }
    result = 'Результат' + ' = ' + '' + result;
    return result;
}

console.log(calc('+', 1, 2));
console.log(calc('-', 1, 2));
console.log(calc('*', 1, 2));




