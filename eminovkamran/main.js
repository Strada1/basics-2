console.log('test')
console.log('test1')


function calc(action, a, b) {
    if (action === 'plus') {
        return a + b;
    } else if (action === 'multi') {
        return a * b;
    } else if (action === 'subtract') {
        return a - b;
    }
}

console.log(calc('plus', 1, 2)) // 3
console.log(calc('multi', 1, 2)) // 2
console.log(calc('subtract', 3, 2)) // 1

function calculator(action, number1, number2) {
    switch (action) {
        case 'plus':
            return number1 + number2;
        case 'multi':
            return number1 * number2;
        case 'subtract':
            return number1 - number2;
    }
}

console.log(calculator('plus', 1, 2)) // 3
console.log(calculator('multi', 1, 2)) // 2
console.log(calculator('subtract', 3, 2)) // 1




