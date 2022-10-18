// Калькулятор с использованием Конструкции "switch"

const operations = {
	add: '+',
	multi: '*',
	subtract: '-'
}

function calc(sign, a, b) {
	switch (sign) {
		case operations.add:
			return a + b
		case operations.multi:
			return a * b
		case operations.subtract:
			return a - b
		default:
			return 'неизвестное значение'
	}
}

console.log(calc(operations.add, 1, 2))
console.log(calc(operations.multi, 1, 2))
console.log(calc(operations.subtract, 3, 2))

console.log(calc(operations.subtractd, 3, 2))
