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
	} else if (!(status == "In Progress" || status == "Done" || status == "To Do")) {
		return "please write the correct status"
	} else {
		return list[task] = status
	}
}
// changeStatus(list, "write a post", Done)

// добавление задачи
function addTask(list, task) {
	if ((task in list)) {
		return "this task is already in list? add new task"
	} else {
		return list[task] = "To Do"
	}
}
// addTask(list, "kiss them")

// удаление задачи
function deleteTask(list, task) {
	if (!(task in list)) {
		return "task not at list"
	} else {
		return delete list[task]
	}
}
// deleteTask(list, "write a post")

// вывод списка задач
function showList (list) {
	console.log("In Progress");
	for (let task in list) {
		if (list[task] === "In Progress") {
			console.log(task + '\n');
		}
	}
	console.log("Done");
	for (let task in list) {
		if (list[task] === "Done") {
			console.log(task + '\n');
		}
	}
	console.log("To Do");
	for (let task in list) {
		if (list[task] === "To Do") {
			console.log(task + '\n');
		}
	}
}
showList(list)
addTask(list, "kiss them")
addTask(list, "kill them")
changeStatus(list, "write a post", "Done")
deleteTask(list, "kill them")
showList(list)
