const STATUS = {
	TO_DO: 'toDo',
	IN_PROGRESS: 'inProgress',
	DONE: 'done',
}

const list = {};

function addTask(task) {
	if (task in list) {
		console.log('Такая задача уже есть в листе');
	} else {
		list[task] = STATUS.TO_DO
		console.log('Задача успешно добавлена');
	}
}

function changeStatus(task, status) {
	if (task in list) {
		list[task] = status
		console.log('Статус успешно изменен');
	} else {
		console.log('Нет такой задачи в листе');
	}
}

function deleteTask(task) {
	if (task in list) {
		delete list[task]
		console.log('Задача успешно удалена');
	} else {
		console.log('Нет такой задачи для удаления');
	}
}

function showList() {
	let toDoList = {};
	let inProgressList = {};
	let doneList = {};

	for (let key in list) {
		if(list[key] === STATUS.TO_DO) {
			toDoList[key] = ''
		} else if (list[key] === STATUS.IN_PROGRESS) {
			inProgressList[key] = ''
		} else if (list[key] === STATUS.DONE) {
			doneList[key] = ''
		} 
	}

	console.log('\n' + 'Todo:')
	for (let key in toDoList) {
		console.log(`\t"${key}",`)
	}

	console.log('\n' + 'In Progress:')
	for (let key in inProgressList) {
		console.log(`\t"${key}"`)
	}
	
	console.log('\n' + 'Done:')
	for (let key in doneList) {
		console.log(`\t"${key}"`)
	}
}

// Added task
addTask("creat a new practice task");
addTask("make a bed");
addTask("write a post");
addTask("delete task");

//Change status
changeStatus("write a post", STATUS.IN_PROGRESS);

// Delete task
deleteTask("delete task");

showList()