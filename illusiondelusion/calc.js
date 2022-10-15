function calc (operator, a, b) {
    let result;

    switch (operator) {
        case 'multi':
            result = a * b;
            break;
        case 'add':
            result = a + b;
            break;
        case 'subtract':
            result = a - b;
            break;
    }

    return result;
}

console.log(calc ('subtract', 4, 2));
console.log(calc ('multi', 4, 2));
console.log(calc ('add', 4, 2));


