
const calcIF = (expr, a, b) => {
    if(expr === 'add')
        return a + b
    else if(expr === 'multi')
        return a * b
    else if(expr === 'subtract')
        return a - b
}

const calcSW = (expr, a, b) => {
    switch (expr) {
        case 'plus':
            return a + b
        case 'multi':
            return a * b
        case 'subtract':
            return a - b
    }
}

console.log(calcIF('add', 1,2))
console.log(calcIF('multi', 1,2))
console.log(calcIF('subtract', 3,2))

console.log(calcSW('plus', 1, 2))
console.log(calcSW('multi', 1, 2))
console.log(calcSW('subtract', 3, 2))