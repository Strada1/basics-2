const ADD = 'add';
const MULTI = 'multi';
const SUBTRACT = 'subtract';
const UNK_OPER = 'unknown operation';

function calc(operation, a, b) {

    const isNotValid = typeof a !== 'number' 
                    || typeof b !== 'number';
    
    if (isNotValid) { 
        return('Error');
    } else {

    switch(operation) {
        
        case ADD:
            return a + b;
        case MULTI:
            return a * b;
        case SUBTRACT:
            return a - b;
        default:
            return(UNK_OPER);   
        }
    }
}

console.log(calc('add', 1, 2));
console.log(calc('multi', 86, 'g6f'));
console.log(calc('subtract', -8, 7));
console.log(calc('a', 1, 2));