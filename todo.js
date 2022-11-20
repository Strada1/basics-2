const list = [{ name: 'create a post', status: 'In progress', priority: 'low' },
{ name: 'test', status: 'To Do', priority: 'high' },
]
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
	let toDo = list.filter(item => item.status == 'To Do');
	console.log(toDo)
	console.log("In Progress : ")
	let inProgress = list.filter(item => item.status == 'In progress');
	console.log(inProgress)
	console.log("Done : ")
	let done = list.filter(item => item.status == 'Done');
	console.log(done)
}

addTask('have a walk', "To Do", "low")
addTask('do homework', "To Do", "high")
addTask('meet friends', "To Do", "low")

/* deleteTask('create a post')
 */
changeStatus('have a walk', 'Done')
changeStatus('meet friends', 'Done')
changeStatus('do homework', 'In progress')

showList()



