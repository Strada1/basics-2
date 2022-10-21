const list = {
	"create a new practice task": "In Progress",
	"make a bed": "Done",
	"write a post": "To Do",
}

function addTask(task) {
    list[task] = 'To Do';
}

function deleteTask(task) {
    delete list[task];
}

function changeStatus(task, newStatus) {
  if (task in list === true) {
    list[task] = newStatus;
  }
}

function showList() {
    let inProgressTasks = '';
    let todoTasks = '';
    let doneTasks = '';
    let noTasks = '\n -';
    for(let key in list) {
         if (list[key] === 'In Progress') {
            inProgressTasks += ` "${key}", \n `;
        } else if (list[key] === 'To Do') {
            todoTasks += ` "${key}", \n `;
        } else if (list[key] === 'Done') {
            doneTasks += ` "${key}", \n `;
        }
    }
    console.log('In Progress:' + (inProgressTasks || noTasks));
    console.log('To do:' + (todoTasks || noTasks));
    console.log('Done:' + (doneTasks || noTasks));
}


addTask('Read a book');
addTask('Clean the apartment');
deleteTask('create a new practice task');
changeStatus('make a bed', 'In Progress');
showList();

