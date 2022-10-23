const list = {
	"create a new practice task": "In Progress",
	"make a bed": "Done",
	"write a post": "To Do",
	changeStatus(nameTask, taskProgress) {
		if (this[nameTask])
			this[nameTask] = taskProgress
		else
			console.log('Такой задачи не найдено [change status')
	},

	addTask(nameTask) {
		if (!this[nameTask])
			this[nameTask] = 'new task'
		else
			console.log('Задача уже существует')
	},

	deleteTask(nameTask) {
		if (this[nameTask])
			delete this[nameTask]
		else
			console.log('Такой задачи не найдено [delete]')

	},
}
// console.log(list);
// list.changeStatus("write a post1", "Done"); // несуществующая задача
// console.log(list["write a post"]);
// list.changeStatus("write a post", "Done"); // существующая задача

list.addTask('have a walk');
console.log(list);
console.log(list['have a walk']);
list.deleteTask('have a walk');
console.log(list);
list.deleteTask('have a walk');