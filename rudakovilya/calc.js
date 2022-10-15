'use strict';

const calc = (a, b, char = '+') => {

	if (isNaN(a) || isNaN(b)) {

		return alert('Hey! Wake up! Enter the correct value!')

	}

	switch (char) {

		case '-':
			return a - b;

		case '*':
			return a * b;

		case '/':
			return a / b;

	}

	return a + b;

}

const firstNumber = +prompt('Hey! Enter the first number here!');

const char = prompt('Hey! Enter your operator!');

const secondNumber = +prompt('Hey! Enter the second number here!');

const anwser = alert(`Hey! Here's your answer: ${calc(firstNumber, secondNumber, char) || ":("}`)