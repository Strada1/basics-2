function isNumber(value) {
	return typeof value === 'number' && !isNaN(value);
}

function calc(actionCalc, a,b) {
// a = Number(a); // Наверное, так нагляднее.
// b = Number(b);
a = +a; // А так компактнее :)
b = +b;
	
	let result;
	if (isNumber(a) && isNumber(b) )
	{
	switch (actionCalc) {
		case 'add':
			result = a + b;
			break;
		case 'multi':
			result = a * b;
			break;
		case 'subtract':
			result = a - b;
			break;
		default:
			result = 'Неверная операция';
			break; 
	} 
} else {
	result = 'Входные значения для расчета не являются числами';
}
	return result;
}
console.log(calc('add', 4, 2)); // ожидается 6
console.log(calc('subtract', '4s', 2)); // ожидается сообщение об ошибке
console.log(calc('multi', '4', '2')); // ожидается 8