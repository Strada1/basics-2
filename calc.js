// Калькулятор с использованием Условия if / else

function calc(sign,a,b) {
	if (sign === 'add') return a + b
	if (sign === 'multi') return a * b
	if (sign === 'subtract') return a - b
	else return 'неизвестное значение'
}


// Калькулятор с использованием Конструкции "switch"

function calc(sign,a,b) {
	switch (sign) {
		case 'add' :
			return a + b
		case 'multi' :
			return a * b
		case 'subtract' :
			return a - b
		default :
			return 'неизвестное значение'
	}
}


// Калькулятор с использованием Тернарного оператора

function calc(sign,a,b) {
	return sign === 'add' ? a + b
		: sign === 'multi' ? a * b
			: sign === 'subtract' ?  a - b
				: 'неизвестное значение'
}



console.log(calc('add', 1,2))
console.log(calc('multi', 1,2))
console.log(calc('subtract', 3,2))


console.log(calc('subtractc', 3,2))

