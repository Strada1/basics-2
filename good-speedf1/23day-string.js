// set first char to Uppercase
function ucFirst(string) {
	if (!string) {
		return string;
	}
	let newString = string[0].toUpperCase() + string.slice(1)
	return newString
}
// console.log( ucFirst('gh') );

// checkSpam
function checkSpam(string) {
	let newString = string.toLowerCase()
	return newString.includes("viagra") || newString.includes('xxx');
}
// console.log(checkSpam('ghhtth'));
// console.log(checkSpam('ghhtxxxth'));

// maxSizeString
function maxSizeString(string, maxlength) { 
	if (string && string.length > maxlength) {
		return string.slice(0, maxlength) + '…'
	} return string;
}
// console.log(maxSizeString('dfsrhdttdjtj', 5));


function showVerticalMessage(string) { 
	let maxlength = 7;
	let result = '';
	if (string.length > maxlength) {
		string = string.slice(0, maxlength) 
	}
	if (string[0].toLowerCase() === 's') {
		string = string[0].toUpperCase() + string.slice(1)
	}
	// return string
	for (let char in string) {
		result += string[char] + '\n' 
	}
	return result
}

console.log(showVerticalMessage('strada'));
console.log(showVerticalMessage('qwertyuiop'));