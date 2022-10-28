const STATUS = {
	IN_PROGRESS: "In Progress",
	DONE: "Done",
	TO_DO: "To Do",
}
const ERRORS = {
	TASK_NOT_FOUND: "Такой задачи не найдено",
	TASK_ALREADY_EXIST: "Такая задача уже существует",
	TASK_NOT_UNIQUE: "Имя задачи не уникально",
}
const PRIORITY = {
	LOW: "low",
	MEDIUM: "medium",
	HIGH: "high",
}

const list = 
[ { name: 'create a post', status: 'In Progress', priority: 'low'  }, 
	{ name: 'test', status: 'Done', priority: 'high'  },
] 

function findAll (nameTask,findStatus = null,findPriority = null) {
	let returnArray = [];
	for (let i = 0; i < list.length; i++) {
		if (list[i].name == nameTask) {
			returnArray.push(i);
		}
	}
	return returnArray;
}

function changeTask(taskInArray, taskStatus, taskPriority) {
	 if (taskInArray) {
		if (taskStatus) taskInArray.status = taskStatus;
		if (taskPriority) taskInArray.priority = taskPriority;
	 }
	 else
		console.log(ERRORS.TASK_NOT_FOUND);
}

function addTask(nameTask, addStatus = STATUS.TO_DO, addPriority = PRIORITY.MEDIUM) {
	if (findAll(nameTask).length == 0)
		list.push({name:nameTask, status:addStatus,priority:addPriority});
	else
		console.log(ERRORS.TASK_ALREADY_EXIST)
}

function deleteTask(nameTask) {
	let arrFindTask = findAll(nameTask);
	if (arrFindTask.length != 0) 
	 list.splice(arrFindTask[0],1)
}

function showList() {
	let toDoStatus = STATUS.TO_DO;
	let doneStatus = STATUS.DONE;
	let inProgressStatus = STATUS.IN_PROGRESS;

	for (let i = 0; i = list.length; i++) {
	 if (list[i].status === STATUS.TO_DO)	toDoStatus +=`\n   ${list[i].name}`;
	 if (list[i].status === STATUS.DONE) doneStatus +=`\n   ${list[i].name}`;
	 if (list[i].status === STATUS.IN_PROGRESS) inProgressStatus +=`\n   ${list[i].name}`;	
	} 
	
	 if (toDoStatus.length === STATUS.TO_DO.length) toDoStatus += '\n   -';
	 if (doneStatus.length === STATUS.DONE.length) doneStatus += '\n   -';
	 if (inProgressStatus.length === STATUS.IN_PROGRESS.length) inProgressStatus += '\n   -';

	return `${doneStatus}\n${toDoStatus}\n${inProgressStatus}`;
}

// console.log(findTask('create a post'));

// changeTask(list[findTask('create a post')[0]], STATUS.DONE, PRIORITY.MEDIUM);
// addTask('go to walk');
// console.log(findTask('go to walk').length);

// console.log(list);
// deleteTask('go to walk');

console.log(showList());