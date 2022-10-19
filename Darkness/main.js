const calc = (operator,firstNum,secondNum)=>{
    let result
    let operations = {
        add:'+',multi:"*",subtract:'-'
    }
    switch (operator) {
        case operations.add:
            result = firstNum+secondNum
            break;
        case operations.multi:
            result = firstNum*secondNum
            break
        case operations.subtract:
            result = firstNum - secondNum
            break
        default:
            result = 'error'
            break;
    }
    return result
}
console.log(calc('*',5,5))