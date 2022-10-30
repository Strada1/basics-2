const STATUS = {
	STATUS: "status",
	TODO: "to do",
	IN_PROGRES: "in progress",
	DONE: "done",
}

const PRIORITY = {
	PRIORITY: "priority",
	LOW: "low",
	MEDIUM: "medium",
	HIGHT: "hight",
}
const ERRORS = {

	INPUT_ERROR: 'Вы не ввели данные',
	TASK_EXISTS: 'Эта задача уже добавлена в список',
	NO_SUCH_TASK: 'Такой задачи не существует, проверьте правильность ввода',
	INCORRECT_SORT_TYPE: 'Введите коректный тип сортировки по статусу выполнения задачи"status"  или по приоретету задачи"priority"!!'
}
const list = [
	{ name: 'create a post', status: STATUS.IN_PROGRES, priority: PRIORITY.HIGHT },
	{ name: 'test', status: STATUS.TODO, priority: PRIORITY.MEDIUM },
	{ name: 'make a bed', status: STATUS.TODO, priority: PRIORITY.HIGHT },
	{ name: 'write a post', status: STATUS.TODO, priority: PRIORITY.LOW },
	{ name: 'test2', status: STATUS.TODO, priority: PRIORITY.LOW },
]

//Добавление задачи
function addTask(taskName) {
	let numberTasks = list.findIndex(item => item.name === taskName);
	if (taskName === '' || taskName === ' ' || taskName === undefined) {
		console.log(ERRORS.INPUT_ERROR)
	} else if (numberTasks === -1) {
		list.push({ name: taskName, status: STATUS.TODO, priority: PRIORITY.LOW });
	} else if (numberTasks >= 0) {
		console.log(ERRORS.TASK_EXISTS);
	}
}

//Удаление задачи
function deleteTask(taskName) {
	let numberTasks = list.findIndex(item => item.name === taskName);
	if (numberTasks !== -1) {
		list.splice(numberTasks, 1);
	} else if (taskName === '' || taskName === ' ' || taskName === undefined) {
		console.log(ERRORS.INPUT_ERROR)
	} else {
		console.log(ERRORS.NO_SUCH_TASK);
	}
}

//Изменение статуса задачи
function changeStatus(taskName, STATUS) {
	let numberTasks = list.findIndex(item => item.name === taskName);
	if (numberTasks !== -1) {
		list.splice(numberTasks, 1, { name: taskName, status: STATUS, priority: list[numberTasks].priority })
	} else if (taskName === '' || taskName === ' ' || taskName === undefined) {
		console.log(ERRORS.INPUT_ERROR)
	} else {
		console.log(ERRORS.NO_SUCH_TASK);
	}
}
//Изменение приоритета задачи
function changePriority(taskName, PRIORITY) {
	let numberTasks = list.findIndex(item => item.name === taskName);
	if (numberTasks !== -1) {
		list.splice(numberTasks, 1, { name: taskName, status: list[numberTasks].status, priority: PRIORITY })
	} else if (taskName === '' || taskName === ' ' || taskName === undefined) {
		console.log(ERRORS.INPUT_ERROR)
	} else {
		console.log(ERRORS.NO_SUCH_TASK);
	}
}

function showList(sortType) {
	if (sortType === STATUS.STATUS) {

		let toDo = list.filter(item => item.status === STATUS.TODO);
		let inProgres = list.filter(item => item.status === STATUS.IN_PROGRES);
		let done = list.filter(item => item.status === STATUS.DONE);

		console.log(`Todo:`)
		if (toDo.length > 0) {
			let toDoTask = toDo.map(item => item.name);
			console.log(`\t${toDoTask.join(`,\n\t`)}`);
		} else if (toDo.length === 0) {
			console.log("\t-");
		}

		console.log(`In Progress:`)
		if (inProgres.length > 0) {
			let inProgresTask = inProgres.map(item => item.name);
			console.log(`\t${inProgresTask.join(`,\n\t`)}`);
		} else if (inProgres.length === 0) {
			console.log("\t-");
		}

		console.log(`Done:`)
		if (done.length > 0) {
			let doneTask = done.map(item => item.name);
			console.log(`\t${doneTask.join(`,\n\t`)}`);
		} else if (done.length === 0) {
			console.log("\t-");
		}

	} else if (sortType === PRIORITY.PRIORITY) {
		let low = list.filter(item => item.priority === PRIORITY.LOW);
		let medium = list.filter(item => item.priority === PRIORITY.MEDIUM);
		let hight = list.filter(item => item.priority === PRIORITY.HIGHT);

		console.log(`Hight:`)
		if (hight.length > 0) {
			let hightPriority = hight.map(item => item.name);
			console.log(`\t${hightPriority.join(`,\n\t`)}`);
		} else if (hight.length === 0) {
			console.log("\t-");
		}

		console.log(`Medium:`)
		if (medium.length > 0) {
			let mediumPriority = medium.map(item => item.name);
			console.log(`\t${mediumPriority.join(`,\n\t`)}`);
		} else if (medium.length === 0) {
			console.log("\t-");
		}

		console.log(`Low:`)
		if (low.length > 0) {
			let lowPriority = low.map(item => item.name);
			console.log(`\t${lowPriority.join(`,\n\t`)}`);
		} else if (low.length === 0) {
			console.log("\t-");
		}

	} else if (sortType === "" || sortType === " " || sortType === undefined) {
		console.log(ERRORS.INPUT_ERROR)

	} else (
		console(ERRORS.INCORRECT_SORT_TYPE)
	)

}

/*Добавление задачи function("taskName")*/
//addTask("test3");

/*Удаление задачи function("taskName")*/
//deleteTask('test2');

/*Изменение статуса задачи "to do", "in progress", "done" function("taskName", "STATUS")*/
//changeStatus("test3", "done");

/*Изменение приоритета задачи "low", "medium", "hight" function("taskName", "PRIORITY")*/
//changePriority("test3", "medium")

/*Сортировка по приоритету "priority" и статусу "status" задачи function("sortType")*/
showList("priority")
