// Калькулятор с использованием Условия if / else

function calc(sign,a,b) {
	if (sign === 'add') return a + b
	if (sign === 'multi') return a * b
	if (sign === 'subtract') return a - b
	else return 'неизвестное значение'
}



console.log(calc('add', 1,2))
console.log(calc('multi', 1,2))
console.log(calc('subtract', 3,2))


console.log(calc('subtractc', 3,2))

