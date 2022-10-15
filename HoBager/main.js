function calc(operation,a,b){
    if(!(+a) || !(+b)){
        return 'не правильно набраны переменные'
    }

    switch(operation){
        case 'add': return (+a) + (+b)
        case 'multi': return a * b
        case 'subtract': return a - b
        default : return 'недопустимый оператор' 
    }
}

console.log(calc('add', 6, 2));
console.log(calc('multi', 4, 2));
console.log(calc('subtract',10, 2));