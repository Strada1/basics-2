const operations = {
    add: '+',
    multi: '*',
    substract: '-'
}

function calc(operation,a,b){
    if(!(+a) || !(+b)){
        return 'не правильно набраны переменные'
    }

    switch(operation){
        case operations.add: return (+a) + (+b)
        case operations.multi: return a * b
        case operations.substract: return a - b
        default : return 'недопустимый оператор' 
    }
}

