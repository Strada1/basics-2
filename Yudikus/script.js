function calc(operator, a, b){
    switch(operator){
        case ('add'):
            return a+b;
        case ('multi'):
            return a*b;
        case ('subtract'):
            return a-b;
        default:
            console.log('Unknown operation');        
    }
}
console.log(calc("add", 43, 95));
console.log(calc("multi", 43, 95));
console.log(calc("subtract", 43, 95));