function calc(operation, a, b) {

    const isNotValid = typeof a !== 'number' || typeof b !== 'number';
    if (isNotValid) { 
        return('Error');
    } else {

    switch(operation) {
        
        case 'add':
            return a + b;
        case 'multi':
            return a * b;
        case 'subtract':
            return a - b;
        default:
            return('unknown operation');   
        }
    }
}

console.log(calc('add', 1, 2));
console.log(calc('multi', 86, 'g6f'));
console.log(calc('subtract', -8, 7));
console.log(calc('a', 1, 2));