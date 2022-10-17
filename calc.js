// // калькулятор if..else
// let action = prompt('Введите действие');
// let a = +prompt('Введите первое число');
// let b = +prompt('Введите второе число');

// function calc(action, a, b) {

// 	if (action == "add") {
// 		return result = (a + b);
// 	}
// 	if (action == "multi") {
// 		return result = (a * b);
// 	}
// 	if (action == "subtract") {
// 		return result = (a - b);
// 	}
// }

// calc(action, a, b);
// alert(result);


// калькулятор switch
let action = prompt('Введите действие');
let a = +prompt('Введите первое число');
let b = +prompt('Введите второе число');
let result;

switch (action) {
	case "add":
		result = (a + b);
		break;
	case "multi":
		result = (a * b);
		break;
	case "subtract":
		result = (a - b);
		break;
	default:
		result == false;
}

alert(result);