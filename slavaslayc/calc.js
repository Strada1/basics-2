const OPERATORS = {
    add: '+',
    multi: '*',
    subtract: '-',
    division: '/',
}

function delElementHistory (event) {
    event.target.remove()
}

function addHistoryResult (result) {
    // 1. Найти нужный элемент
    const divCalculator = document.querySelector('.calculator');
    // 2. Создать для каждого результата div-контейнер и добавлять его после контейнера калькулятор
    const createDivResult = document.createElement('div');
    divCalculator.append(createDivResult);
    // 3. Вставить в него строку с результатом при каждом нажатии на '='
    createDivResult.textContent = `|${result}`;
    // 4. На каждом значении должен быть обработчик удаляющий его по клику
    createDivResult.addEventListener("click", delElementHistory)
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
    addHistoryResult(result);
}

const button = document.querySelector('#equals');
button.addEventListener("click", calc)