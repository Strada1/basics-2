let firstNum = +prompt('Введите первое число:');
let secondNum = +prompt('Введите второе число:');
let userSymbol = prompt('Введите идентификатор +, - или *', '+,-,*');
let resault;

function getFirstNum() {
	while ((isNaN)(firstNum)) {
		alert('Вы ввели не число!');
		firstNum = +prompt('Введите первое число:');
	};
}
function getSecondNum() {
	while ((isNaN)(secondNum)) {
		alert('Вы ввели не число!');
		secondNum = +prompt('Введите второе число:');
	};
}

function calc() {
	getFirstNum();
	getSecondNum();
	switch (userSymbol) {
		case '+':
			resault = firstNum + secondNum;
			alert(`Результат равен ${resault}`);
			break;
		case '*':
			resault = firstNum * secondNum;
			alert(`Результат равен ${resault}`);
			break;
		case '-':
			resault = firstNum - secondNum;
			alert(`Результат равен ${resault}`);
			break;
		default:
			alert(`Введен неверный идентификатор`);
	}
}
calc();