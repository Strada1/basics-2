
let input = document.querySelector('.content');
input.addEventListener('submit', (event) => {
	event.preventDefault();

	const serverUrl = 'https://api.genderize.io';
	f(serverUrl, document.querySelector('.input').value)
})


function f(serverUrl, userName) {

	fetch(`${serverUrl}?name=${userName}`)
		.then((response) => response.json())
		.then(function (response) {
			let gender = response.gender;
			console.log(`${userName} is ${gender}`)
			document.querySelector('.result').append(`${userName} is ${gender}`)
		})
}









/* async function f(userName) {
	const url = `${serverUrl}?name=${userName}`;
	const response = await fetch(url);
	const data = await response.json();
	const gender = data.gender;

	console.log(`${userName} is ${gender}`)

} */