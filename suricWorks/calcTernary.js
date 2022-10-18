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
