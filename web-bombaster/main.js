function calc (prefix, number1, number2) {
    let result;

    switch (prefix) {
        case 'add':
            result = number1 + number2;
            break;
        case 'multi':
            result = number1 * number2;
            break;
        case 'subtract':
            result = number1 - number2;
            break;
        default:
            console.log('Тут будет деление');
            break;
    }

    return result;
};

console.log(calc('multi', 3, 3));