const calc = (operator,firstNum,secondNum)=>{
    let result
    switch (operator) {
        case 'add':
            result = firstNum+secondNum
            break;
        case 'multi':
            result = firstNum*secondNum
            break
        case 'subtract':
            result = firstNum - secondNum
            break
        default:
            result = 'error'
            break;
    }
    return result
}
console.log(calc('sd',5,5))