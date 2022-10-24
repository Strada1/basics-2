const STATUS = {
	IN_PROGRESS: "In Progress",
	DONE: "Done",
	TO_DO: "To Do",
}

const ERRORS = {
	TASK_NOT_FOUND: "Такой задачи не найдено",
	TASK_ALREADY_EXIST: "Такая задача уже существует",
}

const list = {
	"create a new practice task": STATUS.DONE ,
	"make a bed": STATUS.DONE,
	"write a post": STATUS.TO_DO,
	
	changeStatus(nameTask, taskStatus) {
		if (this[nameTask])
			this[nameTask] = taskStatus
		else
			console.log(ERRORS.TASK_NOT_FOUND)
	},

	addTask(nameTask) {
		if (!this[nameTask])
			this[nameTask] = 'new task'
		else
			console.log(ERRORS.TASK_ALREADY_EXIST)
	},

	deleteTask(nameTask) {
		if (this[nameTask])
			delete this[nameTask]
		else
			console.log(ERRORS.TASK_NOT_FOUND)
	},

	showList() {
		let toDoStatus = STATUS.TO_DO;
		let doneStatus = STATUS.DONE;
		let inProgressStatus = STATUS.IN_PROGRESS;

		for (let key in list) {
		 if (list[key] === STATUS.TO_DO)	toDoStatus +=`\n   ${key}`;
		 if (list[key] === STATUS.DONE) doneStatus +=`\n   ${key}`;
		 if (list[key] === STATUS.IN_PROGRESS) inProgressStatus +=`\n   ${key}`;	
		}

		 if (toDoStatus.length === STATUS.TO_DO.length) toDoStatus += '\n   -';
		 if (doneStatus.length === STATUS.DONE.length) doneStatus += '\n   -';
		 if (inProgressStatus.length === STATUS.IN_PROGRESS.length) inProgressStatus += '\n   -';

		return `${doneStatus}\n${toDoStatus}\n${inProgressStatus}`;
	}

}

list.changeStatus("write a post1", STATUS.DONE); // несуществующая задача
list.changeStatus("write a post", STATUS.DONE); // существующая задача

list.addTask('have a walk');
list.changeStatus('have a walk', STATUS.TO_DO);

console.log(list.showList());

list.deleteTask('have a walk');
list.changeStatus("write a post", STATUS.IN_PROGRESS);

console.log(list.showList());