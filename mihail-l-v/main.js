'use strict';
function calc(operator, a, b){
    let result;
    switch (operator) {
        case 'add':
            result = a + b;
            break;
        case 'multi':
            result = a * b;
            break;
        case 'subtract':
            result = a - b;
            break;
        case 'degree':
            result = a ** b;
            break;
    
        default:
            result = 'Error';
            break;
    }
    return result;
}

console.log(calc('add', 1, 2));
console.log(calc('multi', 1, 2));
console.log(calc('subtract', 3, 2));
console.log(calc('degree', 3, 2));
