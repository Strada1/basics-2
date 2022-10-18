const operations = {
    add: '+',
    multi: '*',
    sub: '-',
    degree: '**',
}

'use strict';
function calc(operator, a, b){
    let result;
    switch (operator) {
        case operations.add:
            result = a + b;
            break;
        case operations.multi:
            result = a * b;
            break;
        case operations.sub:
            result = a - b;
            break;
        case operations.degree:
            result = a ** b;
            break;
    
        default:
            result = 'Error';
            break;
    }
    return result;
}

console.log(calc('+', 1, 2));
console.log(calc('*', 1, 2));
console.log(calc('-', 3, 2));
console.log(calc('**', 3, 2));

//Задание 15. Циклы
for (let i = 1; i < 20; i++){
    console.log(i);
}
