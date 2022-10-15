





//calc with if
/* 
function calc(from, text, text2) {
	let result;
	if (isNaN(text) || isNaN(text2)) {
		alert("Введите корректное число")
	} else {
		if (from == 'add' || from == '+') {
			result = text + text2;
			alert("resilt of + is " + result)
		} else if (from == 'multy' || from == "*") {
			result = text * text2;
			alert("resilt of * is " + result)
		} else if (from == 'subtract' || from == "-") {
			result = text - text2;
			alert("resilt of - is " + result)
		}
	}
}

let a = prompt("Введите значение a")
let b = prompt("Введите значение b")
let mathValue = prompt("Введите математическую операцию  :")

calc(mathValue, a, b);

 */



/* 
// задачка
const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
	case 0:
		alert('Вы ввели число 0');

		break;
	case 1:
		alert('Вы ввели число 1');
		break;
	case 2:
	case 3:
		alert('Вы ввели число 2, а может и 3');

		break;
	default:
		alert("Введите корректное значение")
}
 */


function calc(from, a, b) {
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

}


let a = prompt("Введите значение a")
let b = prompt("Введите значение b")
let mathValue = prompt("Введите математическую операцию  :")

calc(mathValue, a, b);