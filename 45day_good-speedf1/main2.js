const FORM1 = document.querySelector('#form1');
const TASKINPUT1 = document.querySelector('#taskInput1')
const TASKSLIST1 = document.querySelector('#tasksList1')

let tasks = [];

FORM1.addEventListener('submit', addTask)
TASKSLIST1.addEventListener('click', deleteTask)
TASKSLIST1.addEventListener('click', doneTask)

function addTask(event) {
	event.preventDefault()//отменяем станд поведение-отправку формы
	const taskText = TASKINPUT1.value//помещ текст из поля ввода в перем
	const newTask = {
		id: Date.now(),
		text: taskText,
		done: false,
	};
	tasks.push(newTask)
	console.log(tasks);
// формируем CSS класс
	const cssClass = newTask.done ? 'task-title task-title--done' : 'task-title'
	//формируем разметку для новой задачи
	const taskHTML = `
		<div class="task list-group-item" id="${newTask.id}">
			<input type="checkbox" class="task__checkbox" data-action="done">
			<label for="task__checkbox1" class="${cssClass}">${newTask.text}</label>
			<button class="task__close-btn btn-action" data-action="delete">+</button>
		</div>
	`;
	//добавляем задачу на страницу в разметку
	TASKSLIST1.insertAdjacentHTML('beforeend',taskHTML)
	//очищаем поле ввода и возвращаем на него фокус
	TASKINPUT1.value = ''
	TASKINPUT1.focus()
}

function deleteTask(event) {
	if (event.target.dataset.action === 'delete') {
		const parentNode = event.target.closest('.list-group-item');
		parentNode.remove();
	}
}

function doneTask(event) {
	if (event.target.dataset.action === 'done') {
		const parentNode = event.target.closest('.list-group-item')
		const taskTitle = parentNode.querySelector('.task-title');
		taskTitle.classList.toggle('task-title--done')
	}
};
