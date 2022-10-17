function calc(operator, a, b) {
    a = Number(a);
    b = Number(b);

    switch(operator) {
        case 'add':
            return a + b;
        case 'multi':
            return a * b;
        case 'substract':
            return a - b;
        default:
            return 'Неизвестная операция';
    }
}

console.log(calc('abkbkh', 45, 10));
console.log(calc('multi', 15, 10));
