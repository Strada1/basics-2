function calculate() {
    let num1 = +(document.getElementById('num1')).value;
    let num2 = +(document.getElementById('num2')).value;
    let operator = document.querySelector('select').value;
    let result = document.getElementById('result');
    switch(operator) {
        case 'add':
            result.textContent = num1 + num2;
            break;
        case 'sub':
            result.textContent = num1 - num2;
            break;
        case 'multi':
            result.textContent = num1 * num2;
            break;
        default:
            result.textContent = num1 / num2;
    }
    // Вывод последнего результата вычислений
    let lastResult = document.createElement('div');
    lastResult.innerHTML = result.textContent;
    document.body.append(lastResult);
    lastResult.addEventListener('click', () => lastResult.remove());
}
