function calc(action, a, b) {
    if(isNaN(a) || isNaN(b)) {
        return 'Only numbers';
    }
    switch(action) {
        case '+': return a + b;
        break;
        case '-': return a - b;
        break;
        case '*': return a * b;
        break;
    }
}

console.log(calc('*', 25, 15))
