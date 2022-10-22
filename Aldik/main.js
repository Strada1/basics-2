const list = {
	"create a new practice task": "In Progress",
	"make a bed": "Done",
	"write a post": "To Do",
	"ask about home work": "Done",
}


function addTask(item) {

	list[item] = "To Do"
}
function deleteTask(item) {
	delete list[item]
}

function changeStatus(item, action) {
	list[item] = action;
}

function showList() {
	console.log("To Do:")
	for (let key in list) {
		if (list[key] == "To Do") {
			console.log(key)
		}
	}
	console.log("In Progress:")
	for (let key in list) {
		if (list[key] == "In Progress") {
			console.log(key)
		}
	}
	console.log("Done:")
	for (let key in list) {
		if (list[key] == "Done") {
			console.log(key)
		}
	}
}



addTask('have a walk')
addTask('have a lunch')
addTask('have a dinner')

deleteTask('have a dinner')


changeStatus("write a post", "Done")
changeStatus("ask about home work", "To Do")
changeStatus("have a lunch", "In Progress")

showList()

