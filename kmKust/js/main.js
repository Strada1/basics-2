const OPERATIONS = {
	ADD: '+',
	MULTI: '*',
	SUBTRACT: '-',
	DIVIDE: '/',
}

function buttonClick() {
	let result = document.querySelector('.result');
	let value1 = +(document.querySelectorAll('input')[0]).value;
	let value2 = +(document.querySelectorAll('input')[1]).value;
	let operator = document.querySelector('select').value;

	function calc(operator, value1, value2) {
		switch (operator) {
			case OPERATIONS.ADD:
				return value1 + value2;
			case OPERATIONS.MULTI:
				return value1 * value2;
			case OPERATIONS.SUBTRACT:
				return value1 - value2;
			case OPERATIONS.DIVIDE:
				switch (value2) {
					case 0:
						return "Ошибка"
					default:
						return value1 / value2;
				}
		}
	}
	return result.innerHTML = calc(operator, value1, value2)
}

function nextButtonClick() {
	let result = document.querySelector('.result');
	let nextResult = result.cloneNode(true);
	let lastDiv = document.querySelector('.result');
	lastDiv.before(nextResult);
}
let valueIs = document.querySelector('button');

valueIs.addEventListener("click", nextButtonClick);
valueIs.addEventListener("click", buttonClick);

let elements = document.querySelector('.resultСonteiner');
elements.addEventListener("click", (event) => {
	event.target.remove();
})
