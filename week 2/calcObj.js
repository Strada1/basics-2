const operations = {
    add: '+',
    multi: '*',
    sub: '-',
}

function calc(iden, a, b) {
    
    if (iden === operations.add) {
        return (a + b);
    }   else if (iden === operations.sub) {
        return (a - b);
    }   else if (iden === operations.multi) {
        return (a * b);
    }   else {
        return "Неверный идентификатор, попробуйте снова";
    }
}

console.log(calc (operations.add, 2, 3))
console.log(calc (operations.sub, 2, 3))
console.log(calc (operations.multi, 2, 3))
console.log(calc ("NaN", 2, 3))
console.log(calc ('+', 2, 3))
console.log(calc ('-', 2, 3))
console.log(calc ('*', 2, 3))
