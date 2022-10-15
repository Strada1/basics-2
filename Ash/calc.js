function calc(expression, a, b) {
    switch(expression) {
        case '*':
            return a * b;
        case '+':
            return a + b;
        case '-':
            return a -b;
    }
}

console.log(calc('*', 2, 4));