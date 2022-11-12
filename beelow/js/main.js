/*

Практика: 

В вашей только что написанной программе “Калькулятор” добавьте сохранение всех результатов: после каждого расчёта (клика по кнопке “=” ) добавляйте новый div под строкой калькулятора и записывайте в него результат вычислений. После нескольких расчетов у вас получится что-то похожее на:

12
32
43
545
12

По клику на каждое из этих чисел - удаляйте его див из разметки. 
У вас будет 2 операции из новой темы: добавление узла в DOM и удаление узла. А еще вам нужно будет “вешать” события на только что созданные “дивы”. Это не самая простая задача, но разве вас уже можно хоть чем-то напугать

*/


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


// clickResult.addEventListener("click", function () {
// containerCalc.insertAdjacentHTML('beforeend', `<div class="result_history"> <strong>${sumResult.textContent}</strong></div>`)
// });

clickResult.addEventListener("click", function () {
    let div = document.createElement('div');
    div.className = 'result_history';
    div.innerHTML = `<strong>${sumResult.textContent}</strong>`;
    containerCalc.append(div)
    div.addEventListener("click", function () {
        div.remove();
    });
});



// setTimeout(() => div.remove(), 1000);
// console.log(`${STATUS.TO_DO}:${todo}`)














/*
const sumResult = document.querySelector('.sum_result')
const clickResult = document.querySelector('.calc_result')

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
*/