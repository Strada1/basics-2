function calc(operator, a, b) {
    switch (operator) {
        case 'add': 
            return  a + b
        case 'multi': 
            return a * b
        case 'subtract': 
            return  a - b
    }
}

console.log(calc('add', 2, 3));
console.log(calc('multi', 2, 3));
console.log(calc('subtract', 10, 3));