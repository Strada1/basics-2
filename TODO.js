const list = {
	"create a new practice task": "In Progress",
	"make a bed": "Done",
	"write a post": "ToDo",
}

function showList() {
	console.log('ToDo:')
	for (let listKey in list) {
		if (list[listKey] === 'ToDo') console.log(' ', listKey)
	}
	console.log('In Progress:')
	for (let listKey in list) {
		if (list[listKey] === 'In Progress') console.log(' ', listKey)
	}
	console.log('Done:')
	for (let listKey in list) {
		if (list[listKey] === 'Done') console.log(' ', listKey)
	}
}

function deleteTask(task) {
	for (let listKey in list) {
		if (listKey === task) {
			delete list[task]
		}
	}
}

function addTask(task) {
	list[task] = "ToDo"
}

function changeStatus(task, List) {
	for (let listKey in list) {
		if (listKey === task) {
			delete list[task]
		}
	}
	for (let listKey in list) {
		if (list[listKey] === List) {
			list[task] = List
		}
	}
}
showList()
changeStatus("write a post", "Done")
addTask('have a walk')
deleteTask('make a bed')
showList()