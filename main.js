const serverUrl = 'https://api.genderize.io';

const form = document.querySelector('.form');
form.addEventListener("submit", getName)

function getName(el) {
	el.preventDefault();
    let input = el.target.querySelector(".input");
    let name = input.value;
		if (!name) return input.value = '';
		getUrl(name)
		el.target.reset();
}

function getUrl(name){
		const url = `${serverUrl}?name=${name}`;
		const response =  fetch(url);
		response
			.then((data) => data.json())
			.then((value) => {
				const gender = value.gender
				addGender(gender, name)
			})
}

function addGender(gender, name) {
	const result = document.querySelector('.result')
	const div = document.createElement('div');
	div.className = 'resGender';
	div.textContent = `${name} is ${gender}`;
	result.append(div)
}








