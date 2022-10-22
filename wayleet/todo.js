const list = {
	"write a post": "To Do",
	"make a bed": "Done",
	"create a new practice task": "In Progress",
};

function changeStatus(task, status) {
	let flag = false;
	if (task in list) {
		list[task] = status;
		flag = true;
	}
	return flag;
}

function addTask(newTask) {
	let flag = false;
	if (!(newTask in list)) {
		list[newTask] = "To Do"
		flag = true;
	}
	return flag;
}

function deleteTask(task) {
	let flag = false;
	if (task in list) {
		delete list[task];
		flag = true;
	}
	return flag;
}

function showList() {
	console.log(`ToDo:`)
	let countToDo = 0;
	for (let task in list) {
		if (list[task] === "To Do") {
			console.log(`\t${task}`);
			countToDo++;
		}
	}
	if (countToDo == 0) {
		console.log('-');
	}
	console.log(`In Progress:`)
	let countProgress = 0;
	for (let task in list) {
		if (list[task] === "In Progress") {
			console.log(`\t${task}`);
			countProgress++;
		}
	}
	if (countProgress == 0) {
		console.log('-');
	}
	console.log(`Done:`)
	let countDone = 0;
	for (let task in list) {
		if (list[task] === "Done") {
			console.log(`\t${task}`);
			countDone++;
		}
	}
	if (countDone == 0) {
		console.log('-');
	}
}

addTask("buy an elephant");
deleteTask("make a bed");
changeStatus("create a new practice task", 'Done');
showList();
