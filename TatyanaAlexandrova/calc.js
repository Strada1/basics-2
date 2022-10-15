function calc(a,b,c){
    switch (c){
    case ('+'):
    return a + b;
    
    case ('-'):
        return a - b;
    
    case ('*'):
        return a * b;
    }   
}
console.log(calc(8, 4, '+'));
console.log(calc(8, 4, '-'));
console.log(calc(8, 4, '*'));