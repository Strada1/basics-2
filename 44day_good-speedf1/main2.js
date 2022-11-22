const FORM1 = document.querySelector('#form1');
const TASKINPUT1 = document.querySelector('#taskInput1')
const TASKSLIST1 = document.querySelector('#tasksList')

let tasks = [];

FORM1.addEventListener('submit', addTask)
// TASKSLIST1.addEventListener('click', deleteTask)
// TASKSLIST1.addEventListener('click', doneTask)

function addTask(event) {
	event.preventDefault()//отменяем станд поведение-отправку формы
	const taskText = TASKINPUT1.value//помещ текст из поля ввода в перем
	const newTask = {
		id: Date.now(),
		text: taskText,
		done: false,
	};
	tasks.push(newTask)
// формируем CSS класс
	// const cssClass = newTask.done ? 'task-title task-title--done' : 'task-title'
	//формируем разметку для новой задачи
	const taskHTML = `
		<div class="task" id="${newTask.id}">
			<input type="checkbox" class="task__checkbox" id="task__checkbox1" data-action="done">
			<label for="task__checkbox1" class="task-title">${newTask.text}</label>
			<button class="task__close-btn btn-action" data-action="delete">+</button>
		</div>
	`;
	//добавляем задачу на страницу в разметку
	TASKSLIST1.insertAdjacentHTML('beforeend',taskHTML)
	//очищаем поле ввода и возвращаем на него фокус
	TASKINPUT1.value = ''
	TASKINPUT1.focus()
}