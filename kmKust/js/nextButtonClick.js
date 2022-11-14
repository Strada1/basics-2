export function nextButtonClick() {
	let result = document.querySelector('.result');
	let nextResult = result.cloneNode(true);
	let lastDiv = document.querySelector('.result');
	lastDiv.before(nextResult);
}