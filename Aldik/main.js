

/* function calc(from, a, b) {
	let result;
	if (isNaN(a) || isNaN(b)) {
		alert("Введите корректные числа")
	} else {
		switch (from) {
			case '+':
			case 'add':
				result = +a + +b;
				alert('result of + is ' + result);
				break;
			case '*':
			case 'multy':
				result = a * b;
				alert('result of * is ' + result);
				break;
			case '-':
			case 'subtract':
				result = a - b;
				alert('result of - is ' + result);
			default:
				result = "Error";
				alert(result)
		}
	}
} */

function calc(from, a, b) {
	let operations = {
		add: '+',
		multy: '*',
		subtract: '-',
	}
	if (((from == '+') || (from == '*') || (from == '-'))) {
		switch (from) {
			case operations.add:
				result = +a + +b;
				alert('result of + is ' + result);
				break;
			case operations.multy:
				result = a * b;
				alert('result of * is ' + result);
				break;
			case operations.subtract:
				result = a - b;
				alert('result of - is ' + result);
				break;
		}
	} else {
		alert('Введите корректную математическую операцию!')
	}
}




let a = prompt("Введите значение a")
let b = prompt("Введите значение b")
let mathValue = prompt("Введите математическую операцию  :")

calc(mathValue, a, b);

