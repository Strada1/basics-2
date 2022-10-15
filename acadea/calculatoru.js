function calc(operator, a, b) {
    switch (operator) {
        case 'add': return  a + b;
        case 'multi': return a * b;
        case 'subtract': return  a - b;
    }
}

console.log(calc('add', 1, 3));
console.log(calc('multi', 1, 3));
console.log(calc('subtract', 9, 3)); 