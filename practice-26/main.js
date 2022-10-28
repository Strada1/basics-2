const list = [
	{ name: 'create a post', status: 'In progress', priority: 'low' },
	{ name: 'make a bed', status: 'Done', priority: 'high' },
	{ name: 'strada roadmap', status: 'In progress', priority: 'high' },
	{ name: 'calc with switch', status: 'Done', priority: 'high' },
	{ name: 'become a president', status: 'In progress', priority: 'low' },
	{ name: 'go to the gym', status: 'To Do', priority: 'high' },
	{ name: 'buy new phone', status: 'Done', priority: 'low' },
]
const taskStatus = {
	inProgress: 'In progress',
	toDo: 'To Do',
	done: 'Done',
}
const taskPriority = {
	high: 'high',
	low: 'low',
}


function changeStatus(task, newStatus) {
	taskToChange = list.find(item => item.name == task);
	taskToChange.status = newStatus;
}

function changePriority(task, newPriority) {
	taskToChange = list.find(item => item.name == task);
	taskToChange.priority = newPriority;
}

function addTask(task, status = taskStatus.toDo, priority = taskPriority.high) {
	list.push({ name: task, status: status, priority: priority });
}

function deleteTask(task) {
	taskToDelete = list.findIndex(item => item.name == task);
	list.splice(taskToDelete, 1);
}

function showList() {
	console.log(`\n${taskStatus.inProgress}\n`);
	for (i = 0; i < list.length; i++) {
		if (list[i].status == taskStatus.inProgress) {
			console.log(`${list[i].name} with ${list[i].priority} priority`);
		}
	}
	console.log(`\n${taskStatus.toDo}\n`);
	for (i = 0; i < list.length; i++) {
		if (list[i].status == taskStatus.toDo) {
			console.log(`${list[i].name} with ${list[i].priority} priority`);
		}
	}
	console.log(`\n${taskStatus.done}\n`);
	for (i = 0; i < list.length; i++) {
		if (list[i].status == taskStatus.done) {
			console.log(`${list[i].name} with ${list[i].priority} priority`);
		}
	}
}

changeStatus("create a post", taskStatus.done);
changePriority("make a bed", taskPriority.low);
addTask("make a dinner");
deleteTask("become a president");
showList();