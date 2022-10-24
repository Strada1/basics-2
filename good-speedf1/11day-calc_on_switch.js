const OPERATIONS = {
  ADD: "+",
  MULTI: "*",
  SUBTRACT: "-",
};
//проверка результата
function checkResult(result) {

	if (isNaN(result)) {
		return 'error';
	} else {
		return result;
	}
}
// вывод на экран результата
function showMessage(a, b, operator, result) {
	console.log(a + ' ' + operator + ' ' + b + ' result: ' + result);
}

//------------------ switch---------------------
// вычисления
function CalculateSwitch(a, b, operator, result) {
	switch (operator) {
		case '+':
			return result = a + b;			
		case '-':
			return result = a - b;			
		case '*':
			return result = a * b;			
		default:
			return result = 'wrong operator';
	}
}

function workingSwitch(a, b, operator, result) {

	if (+a !== Number(a) || +b != Number(b)) {
    return showMessage(a, b, operator, "please write a number!");
  }
	//запись результата выполнения функции Calculate в переменную Final для дальнейших расчетов
	let Final = CalculateSwitch(a, b, operator, result);
	//вызов функции проверки результата
	checkResult(a, b, Final);
	//вызов функции вывода результата
	showMessage(a, b, operator, Final);
}

//test
workingSwitch('3', '3', '+')
workingSwitch(9, 4, '-')
workingSwitch(2, 3, '*')
workingSwitch(1, 3, '+_')
workingSwitch(true, 'hub', '+')