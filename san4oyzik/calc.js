

function calc(operator, a, b) {
    const operations = {
        add: a + b,
        multi: a * b,
        sub: a - b,
    }

    if (operations[operator] !== undefined) {
        return operations[operator];
    }
    
    // a = Number(a);
    // b = Number(b);
    

    // switch(operator) {
    //     case operations.add:
    //         return a + b;
    //     case operations.multi:
    //         return a * b;
    //     case operations.sub:
    //         return a - b;
    //     // default:
    //     //     return 'Неизвестная операция';
    // }
}

console.log(calc('add', 45, 10));
console.log(calc('multi', 15, 10));
