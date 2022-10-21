const operations = {
    add: '+',
    multi: '*',
    subtract: '-',
    'unknown operation': 'unknown operation',
}

function calc(operation, a, b) {

    const isNotValid = typeof a !== 'number' 
                    || typeof b !== 'number';
    
    if (isNotValid) { 
        return('Error');
    } else {

    switch(operation) {
        
        case operations.add:
            return a + b;
        case operations.multi:
            return a * b;
        case operations.subtract:
            return a - b;
        default:
            return(operations['unknown operation']);   
        }
    }
}

console.log(calc('+', 1, 2));
console.log(calc('multi', 86, 'g6f'));
console.log(calc('-', -8, 7));
console.log(calc('a', 1, 2));