const FORM1 = document.querySelector('#form1');
const TASKINPUT1 = document.querySelector('#taskInput1')
const TASKSLIST1 = document.querySelector('#tasksList1')

let tasks = [];
if (localStorage.getItem('tasks')) {
	tasks = JSON.parse(localStorage.getItem('tasks'));
	tasks.forEach((task) => renderTask(task));
}



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
	// добавляем задачу в хранилище LocalStorage
	saveToLocalStorage()

	renderTask(newTask);

	//очищаем поле ввода и возвращаем на него фокус
	TASKINPUT1.value = ''
	TASKINPUT1.focus()
}

function deleteTask(event) {
	if (event.target.dataset.action === 'delete') {
		const parentNode = event.target.closest('.list-group-item');
		const id = Number(parentNode.id);
		// находим индекс задачи в массиве
		const index = tasks.findIndex((task) => task.id === id);
		// удаляем задачу из разметки
		parentNode.remove();
		// удаляем задачу из массива
		tasks.splice(index, 1)
		saveToLocalStorage()
	}
}

function doneTask(event) {
	if (event.target.dataset.action === 'done') {
		const parentNode = event.target.closest('.list-group-item');
		const id = Number(parentNode.id);
		const task = tasks.find((task) => task.id === id);
		// меняем у элемента значение done в массиве
		task.done = !task.done;
		saveToLocalStorage()
		// console.log(tasks);
		const taskTitle = parentNode.querySelector('.task-title');
		taskTitle.classList.toggle('task-title--done');
	}
};

function saveToLocalStorage() {
	localStorage.setItem('tasks', JSON.stringify(tasks))
}

function renderTask(task) {
	const cssClass = task.done ? 'task-title task-title--done' : 'task-title'
	//формируем разметку для новой задачи
	const taskHTML = `
		<div class="task list-group-item" id="${task.id}">
			<input type="checkbox" class="task__checkbox" data-action="done">
			<label for="task__checkbox1" class="${cssClass}">${task.text}</label>
			<button class="task__close-btn btn-action" data-action="delete">+</button>
		</div>
	`;
	//добавляем задачу на страницу в разметку
	TASKSLIST1.insertAdjacentHTML('beforeend',taskHTML)
}