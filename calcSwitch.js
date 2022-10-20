const OPERATIONS = {
    ADD: '+' ,
    MULTI : '*' ,
    SUBTRACT : '-' ,
};

function calc (action, a, b) {
    switch(action) {
        case OPERATIONS.ADD :
            return  (a + b);
        case OPERATIONS.MULTI :
            return  (a * b);
        case OPERATIONS.SUBTRACT :
            return  (a - b);
        default :
            return ('error')
    }
}

console.log(calc (OPERATIONS.ADD , 1, 2))
console.log(calc (OPERATIONS.MULTI, 1, 2))
console.log(calc (OPERATIONS.SUBTRACT, 3, 2))
console.log(calc ('Пример для ошибки', 3, 2))