const list = [{ name: 'create a post', status: 'In progress', priority: 'low' },
{ name: 'test', status: 'To Do', priority: 'high' },
]

const EMPTY = '-'

function addTask(name, status, priority) {

	let object = {
		name,
		status,
		priority,
	}
	list.push(object)
	return object;
	/* list.push(

		list["name"] = arr,
		list["status"] = action.toDo,
		list["priority"] = importance.low,
	) */
}

function deleteTask(listName) {
	console.log(list)
	let NeedDeletedObject = list.find(item => item.name == listName);
	list.splice(NeedDeletedObject, 1)
}

function changeStatus(listName, action) {
	let NeedChangedObject = list.find(item => item.name == listName);
	NeedChangedObject.status = action;

}

function showList() {
	console.log("To Do :")
	let toDo = list.find(item => item.status == 'To Do');
	if (toDo == undefined) {
		console.log(EMPTY)
	} else {
		console.log(toDo.name + ", priority:" + toDo.priority)
	}

	console.log("In Progress : ")
	let inProgress = list.find(item => item.status == 'In progress');
	if (inProgress == undefined) {
		console.log(EMPTY)
	} else {
		console.log(inProgress.name + ", priority:" + inProgress.priority)
	}

	console.log("Done : ")
	let done = list.find(item => item.status == 'Done');
	if (done == undefined) {
		console.log(EMPTY)
	} else {
		console.log(done.name + ", priority:" + done.priority)
	}
}
addTask('have a walk', "To Do", "low")


changeStatus('have a walk', 'In progress')


/* deleteTask('create a post')
deleteTask('do homework') */

showList()













































/* const list = {
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
 */