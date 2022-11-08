const list = [
    {name: 'create a new task',
    status: 'In Progress',
    priority: 'low',},
	{name: "make a bed",
    status: "Done",
    priority: 'low',},
	{name: "write a post",
    status: "To Do",
    priority: 'high'},
];

function chooseTask (arr, name) {
    return arr.find(item => item.name == name)
}

function changeStatus(taskName, newStatus, arr) {
    if (arr.find(item => item.name === taskName)) {
        chooseTask(arr, taskName).status = newStatus
    } else {
        console.log(`Алярма задачи \"${taskName}\" нет в наличии`) 
    }
};

function addTask (arr, taskName, status = 'Еще не начали', priority = 'low') {
    if (arr.find(item => item.name === taskName)) {
        console.log(`У тебя уже есть такая задача зачем тебе вторая?`)
    } else {
        arr.push({name: taskName, status: status, priority: priority})
    }
};

function deleteTask (arr, taskName) {
    if (arr.find(item => item.name === taskName)) {
        arr.splice(arr.findIndex(item => item.name === taskName), 1)
    } else {
        console.log(`Алярма задачи \"${taskName}\" нет в наличии`) 
    }
};


/*
changeStatus("create a new practice task", 'In Progress', list);
addTask('постирать', list);
addTask('попить водички', list, 'Regular');
changeStatus("постирать", 'чета лень', list);
deleteTask('постирать', list);
addTask('не забыть комитнуть все', list, 'To Do'); 
*/

changeStatus('make a bed', 'Done', list);
addTask(list, 'aaa', 'aaa', 'aaa')
addTask(list, 'bbb', 'bbb', 'bbb')
deleteTask(list, 'aaa')

console.log(list)

