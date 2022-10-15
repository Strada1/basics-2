function calc(action,a,b) {
   let result

    if ((a !== +a) || (b !== +b)) {
        result = 'Please enter numbers (a or b)'
    } else {
        switch (action) {
            case 'add':
                result = a + b;
                break;
            case 'multi':
                result = a * b;
                break;
            case 'subtract':
                result = a - b;
                break;
            default:
                result = 'The action is not "add", "multi" or "subtract"'
                break;
        }
    }
    return result
}
console.log(calc('multi',-7,3))
console.log(calc('add',-7,30))
console.log(calc('subtract',-7,31))
console.log(calc('multi',-7,))
console.log(calc('multi',-7))
console.log(calc('multi',))
console.log(calc('multi'))
console.log(calc('multi',3))
console.log(calc('multis',-7,3))
console.log(calc("", 1, 6));
console.log(calc(null, 1, 6));
console.log(calc(true, 1, 6));
console.log(calc("add", true, true));
console.log(calc("add", "1", 6));
console.log(calc("add", 1, null));
console.log(calc("add", 1, undefined));