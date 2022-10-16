//calculator
const ADD = 'add';
const MULTI = 'multi';
const SUBTRACT = 'substract'; 
function calc(operation,a,b) {
    a = Number(a);
    b = Number(b);
    let NumCheck = (isNumber(a)) && (isNumber(b));
    if (NumCheck = 1) {
        switch (operation) {
            case ADD: 
                return a + b;
            case MULTI: 
                return a * b;
            case SUBTRACT: 
                return a - b;
            default: return "wrong operation"
        }
     } else return "wrong number"
}