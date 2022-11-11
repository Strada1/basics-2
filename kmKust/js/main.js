
function buttonClick() {
	let value1 = +(document.querySelectorAll('input')[0]).value;
	let value2 = +(document.querySelectorAll('input')[1]).value;

	let operator = document.querySelector('select').value;

	let result = document.querySelector('div>p');

	const OPERATIONS = {
		ADD: '+',
		MULTI: '*',
		SUBTRACT: '-',
		DIVIDE: '/',

	}

	function calc(operator, value1, value2) {
		switch (operator) {
			case OPERATIONS.ADD:
				return value1 + value2;
			case OPERATIONS.MULTI:
				return value1 * value2;
			case OPERATIONS.SUBTRACT:
				return value1 - value2;
			case OPERATIONS.DIVIDE:
				return value1 / value2;

		}
	}

	return result.innerHTML = calc(operator, value1, value2)
}

let valueIs = document.querySelector('button');
valueIs.addEventListener("click", buttonClick);

