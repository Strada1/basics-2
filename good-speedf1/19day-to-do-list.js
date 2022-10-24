const STATUS = {
	TO_DO: 'To Do',
	DONE: 'Done',
	IN_PROGRESS: 'In Progress',
}

// список задач
const list = {
	"create a new practice task": "In Progress",
	"make a bed": "Done",
	"write a post": "To Do",
}

// изменение статуса задачи
function changeStatus(list, task, status) {
	if (!(task in list)) {
		return "task not found"
	} else if (!(status == STATUS.IN_PROGRESS || status == STATUS.DONE || status == STATUS.TO_DO)) {
		console.log("please write the correct status"); 
	} else {
		list[task] = status
	}
}
// changeStatus(list, "write a post", Done)

// добавление задачи
function addTask(list, task) {
	if ((task in list)) {
		console.log("this task is already in list? add new task"); 
	} else {
		list[task] = STATUS.TO_DO
	}
}
// addTask(list, "kiss them")

// удаление задачи
function deleteTask(list, task) {
	if (!(task in list)) {
		console.log("task not exist at list"); 
	} else {
		delete list[task]
	}
}
// deleteTask(list, "write a post")

// вывод списка задач
function showList (list) {
	let count_in_progress = 0,
			count_to_do = 0,
			count_done = 0;
	console.log("In Progress");
	for (let task in list) {
		if (list[task] === STATUS.IN_PROGRESS) {
			count_in_progress++;
			console.log(task + '\n');
		}
	}
	if (count_in_progress === 0) {
		console.log(' - ');
	}

	count = 0;
	console.log("Done");
	for (let task in list) {
		if (list[task] === STATUS.DONE) {
			count_done++;
			console.log(task + '\n');
		}
	}
	if (count_done === 0) {
		console.log(' - ');
	}

	count = 0;
	console.log("To Do");
	for (let task in list) {
		
		if (list[task] === STATUS.TO_DO) {
			count_to_do++;
			console.log(task + '\n');
		}
	}
	if (count_to_do === 0) {
		console.log(' - ');
	}
	// console.log('\n');
}
showList(list)
addTask(list, "kiss them")
addTask(list, "kill them")
changeStatus(list, "write a post", "Done")
deleteTask(list, "kill them")
// deleteTask(list, "make a bed")
// deleteTask(list, "write a post")
// deleteTask(list, "create a new practice task")
// deleteTask(list, "kiss them")
showList(list)
