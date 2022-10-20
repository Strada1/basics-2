function isNumber(value) {
	return typeof value === 'number' && !isNaN(value);
}

function calc(actionCalc, a,b) {
a = Number(a); 
b = Number(b);
	
const operations = {
	add: 'add',
	multi: 'multi',
	sub: 'sub',
};


	let result;
	if (isNumber(a) && isNumber(b) )
	{
	switch (actionCalc) {
		case operations.add:
			result = a + b;
			break;
		case operations.multi:
			result = a * b;
			break;
		case operations.sub:
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