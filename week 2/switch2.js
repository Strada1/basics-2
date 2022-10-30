function calc(iden, a, b) {
    switch (iden) {
        case 'add':
            return a + b;
        case 'multi':
            return a * b;
        case 'subtract':
            return a - b;
    }
}

console.log(calc('add', 6, 232))
console.log(calc('multi', 34, 21))
console.log(calc('subtract', 312, 24))