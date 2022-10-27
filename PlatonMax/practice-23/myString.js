const ERRORS = {
	IS_NOT_STRING: "Параметр не является строкой.",
}

function showVerticalMessage(myString) {
	if (typeof myString === 'string') {
		myString = myString.slice(0,7);
		let finishString = '';
		myString = myString[0].toUpperCase() + myString.slice(1,myString.length);
			for (let char of myString) {
				finishString += `${char}\n`
			}
		console.log(finishString);
	}
	else
		console.log(ERRORS.IS_NOT_STRING);
}

showVerticalMessage('Strade_second_roadmap');
showVerticalMessage(435);	