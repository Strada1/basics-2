const BTNCALCULATE = document.querySelector('.calc-result__btn');
const OPERATOR = document.getElementById('calc-operation');
let firstOperand = document.querySelector('.calc-number1');
let secondOperand = document.querySelector('.calc-number2');
let Result = document.querySelector('.calc-solution');


const OPERATIONS = {
	PLUS: 'sum',
	MULTIPLY: 'multiply',
	MINUS: 'minus',
	DIVISION: 'divide',
};


function Calculate() {
	if (isNaN(firstOperand.value) || firstOperand.value.trim() === '') {
		console.log("operand1 not a number");
		firstOperand.focus();
		return false
	}
	if (isNaN(secondOperand.value) || secondOperand.value.trim() === '') {
		console.log("operand2 not a number");
		secondOperand.focus();
		return false
	}
	if ((secondOperand.value === 0) && OPERATOR.trim() === OPERATIONS.DIVISION) {
		console.log("divide on 0 is bad!!!!");
		secondOperand.focus();
		return false
	}
	CalculateResult()
	renderSolutionToResult()
}
BTNCALCULATE.addEventListener('click', Calculate);


function CalculateResult() {
	switch (OPERATOR.value) {
		case OPERATIONS.PLUS:
			return Result.innerText = +firstOperand.value + +secondOperand.value;
		case OPERATIONS.MINUS:
			return Result.innerText = +firstOperand.value - +secondOperand.value;
		case OPERATIONS.MULTIPLY:
			return Result.innerText = +firstOperand.value * +secondOperand.value;
		case OPERATIONS.DIVISION:
			return Result.innerText = firstOperand.value / secondOperand.value;
		default:
			break;
	}
}
function renderSolutionToResult() {
	let div = document.createElement('div');
	div.className = 'result_history';
  div.innerHTML = `<strong>${Result.innerText}</strong>`;
  document.querySelector('.calc').append(div)
	div.addEventListener("click", function () {
		div.remove();
	});
}

