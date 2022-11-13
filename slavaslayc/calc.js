const OPERATORS = {
    add: '+',
    multi: '*',
    subtract: '-',
    division: '/',
}

function calc() {
    const num1 = Number(document.querySelector('#num1').value)
    const num2 = Number(document.querySelector('#num2').value)
    const operator = document.querySelector('#operators').value
    const resultElement = document.querySelector('#results')
    let result;
    switch (operator) {
        case OPERATORS.add:
            result = num1 + num2;
            break;
        case OPERATORS.multi:
            result = num1 * num2;
            break;
        case OPERATORS.subtract:
            result = num1 - num2;
            break;
        case OPERATORS.division:
            result = num2 === 0 ? 'Ошибка' : num1 / num2;
            break;
    }
    resultElement.textContent = result;
}

const button = document.querySelector('#equals');
button.addEventListener("click", calc)