const list = {
	"create a new practice task": "In Progress",
	"make a bed": "Done",
	"write a post": "To Do",
	"strada roadmap": "In Progress",
	"calc with switch": "Done",
	"simple to do": "To Do",
	"become a president": "To Do",
}
function changeStatus(task, newStatus) {
	for (key in list) {
		if (key === task) {
			list[key] = newStatus;
		}
	}
}
function addTask(task, status = 'To Do') {
	list[task] = status;
}
function deleteTask(task) {
	for (key in list) {
		if (key === task) {
			delete list[key];
		}
	}
}
function showList() {
	console.log('\nIn Progress:\n');
	for (key in list) {
		if (list[key] == 'In Progress') {
			console.log(key);
		}
	}
	console.log('\nTo Do:\n');
	for (key in list) {
		if (list[key] == 'To Do') {
			console.log(key);
		}
	}
	console.log('\nDone:\n');
	for (key in list) {
		if (list[key] == 'Done') {
			console.log(key);
		}
	}
}

console.log(list);
changeStatus("simple to do", "Done");
addTask("go to the gym");
deleteTask("become a president");
showList();