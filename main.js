import { deleteHistory } from "./functions.js";

const result = document.getElementById('result');
button.addEventListener("click", calc);
document.querySelector('.history').addEventListener("click", deleteHistory);


function calc() {
	const num1 = document.getElementById('firstNumber').value;
	const num2 = document.getElementById('secondNumber').value;
	const action = document.getElementById('mathActions').value;
	switch (action) {
		case '+':
			result.textContent = +num1 + +num2;
			break;
		case '-':
			result.textContent = num1 - num2;
			break;
		case '*':
			result.textContent = num1 * num2;
			break;
		case '/':
			result.textContent = num1 / num2;
			break;
	}

	let div = document.createElement('div');
	div.innerHTML = result.textContent; //textContent
	document.querySelector('.history').append(div);
}

