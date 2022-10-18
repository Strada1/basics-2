const calc = (operator,firstNum,secondNum)=>{
    let result
    let operations = {
        add:'add',multi:"multi",subtract:'subtract'
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
console.log(calc('add',5,5))