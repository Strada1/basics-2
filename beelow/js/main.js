const sumResult = document.querySelector('.sum_result')
const clickResult = document.querySelector('.calc_result')
const containerCalc = document.querySelector('.container_calc')

clickResult.addEventListener("click", function () {
    let firstNumber = document.querySelector('.first_number').value;
    let secondNumber = document.querySelector('.second_number').value;
    let operator = document.querySelector('.operator').value;
    if (secondNumber == 0 && operator == '/') {
        sumResult.textContent = 'Нельзя делить на ноль';
        return;
    }
    switch (operator) {
        case '+':
            sumResult.textContent = +((+firstNumber + +secondNumber).toFixed(5));
            break;
        case '-':
            sumResult.textContent = (Math.floor((firstNumber - secondNumber) * 100) / 100);
            break;
        case 'x':
            sumResult.textContent = +((firstNumber * secondNumber).toFixed(5));
            break;
        case '/':
            sumResult.textContent = (Math.floor((firstNumber / secondNumber) * 100) / 100);
            break;
    }
});


clickResult.addEventListener("click", function () {
    let div = document.createElement('div');
    div.className = 'result_history';
    div.innerHTML = `<strong>${sumResult.textContent}</strong>`;
    containerCalc.append(div)
    div.addEventListener("click", function () {
        div.remove();
    });
});
