const list = {
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "write a post": "Done",
    "Buy a car": "To Do",
}

function changeStatus(task, newStatus) {
    list[task] = newStatus;
    return `Статус задачи ${task} изменен на ${newStatus}`;
}

function addTask(newTask) {
    list[newTask] = 'To Do';
    return `Задача ${newTask} добавлена в список со статусом To Do`;
}

function deleteTask(nameTask) {
    let result;
    if (nameTask in list) {
        delete list[nameTask];
        result = `Задача ${nameTask} удалена`
    } else {
        result = `Задачи ${nameTask} нет в списке`
    }
    return result;
}

function showList(list) {
    let todoStatus = '';
    let inProgressStatus = '';
    let doneStatus = '';
    for (let status in list) {
        if (list[status] === 'To Do') {
            todoStatus += `\n\t"${status}",`;
        } else if (list[status] === 'In Progress') {
            inProgressStatus += `\n\t"${status}",`;
        } else if (list[status] === 'Done') {
            doneStatus += `\n\t"${status}",`;
        }

    }
    if (todoStatus === '') {
        todoStatus += '\n\t-';
    } else if (inProgressStatus === '') {
        inProgressStatus += '\n\t-';
    } else if (doneStatus === '') {
        doneStatus += '\n\t-'
    }
    return `Todo:${todoStatus}\nIn Progress:${inProgressStatus}\nDone:${doneStatus}`;
}


console.log(changeStatus('make a bed', 'In Progress'));
console.log(addTask('Watch the video on Artem Dimitrov\'s channel'));
console.log(deleteTask('write a post'));
console.log(showList(list));