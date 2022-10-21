const operations = {
    add: '+',
    multi: '*',
    sub: '-',
}

function calc(operator, a, b) {

    if (a !== Number(a) || b !== Number(b)) {
        return "Введите число!";
    }

    switch(operator) {
        case operations.add:
            return a + b;
        case operations.multi:
            return a * b;
        case operations.sub:
            return a - b;
        default:
            return 'Неизвестная операция';
    }
}

console.log(calc(operations.add, 14, 10));
console.log(calc(operations.multi, 15, 10));
console.log(calc(operations.sub, 15, 10));
console.log(calc('adsadsa', 15, 10));
