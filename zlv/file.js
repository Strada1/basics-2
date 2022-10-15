function calc(operation, num1, num2) {
	switch (operation) {
		case 'add':
			return num1 + num2
		case 'multi':
			return num1 * num2
		case 'subtract':
			return num1 - num2
		
		default:
			alert('Вы ввели что-то не то, попробуйте заново!')
	}
}
console.log(calc('add', 2, 2)) //4
console.log(calc('multi', 3, 10)) //30
console.log(calc('subtract', 10, -5)) //15
