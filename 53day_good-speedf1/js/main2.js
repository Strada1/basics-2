// const FORM1 = document.querySelector('#form1');
// const TASKINPUT1 = document.querySelector('#taskInput1')
// const TASKSLIST1 = document.querySelector('#tasksList1')
// const serverUrl = 'https://api.genderize.io';

import { UI_ELEMENTS } from "./UI.js";

UI_ELEMENTS.FORM1.addEventListener('submit', getResponse)

async function getResponse() {
	let firstName = UI_ELEMENTS.TASKINPUT1.value;
	const url = `${UI_ELEMENTS.serverUrl}?name=${firstName}`;
	// console.log(firstName);
	// console.log(url);
	let response = await fetch(`${url}`)
	let content = await response.json();
	// console.log(content);
	// console.log(firstName + ' is ' + content.gender);

	const taskHTML = `
		<div class="task list-group-item">
			<label for="task__checkbox1" class="task-title">${firstName} is ${content.gender}</label>
		</div>
	`;
	UI_ELEMENTS.TASKSLIST1.insertAdjacentHTML('beforeend', taskHTML)
	UI_ELEMENTS.TASKINPUT1.value = '';
	UI_ELEMENTS.TASKINPUT1.focus();
}
