const list = [];

const listStasus = {
    TODO: 'ToDo',
    INPROGRESS: 'InProgress',
    DONE: 'Done',
}
const listPriority = {
    HIGH: 'high',
    LOW: 'low',
}

function addTask(taskName, taskPriority) {
    if (searchTask(taskName)) {
        console.log('такая задача уже существует');
    } else {
        list.push({
            name: taskName,
            status: listStasus.TODO,
            priority: taskPriority,
        });
    }
}

function changeStatus(taskName, taskStatus) {
    let sameTask = searchTask(taskName);
    if (sameTask) {
        list[+sameTask].status = taskStatus;
    } else {
        console.log('такой задачи не существует');
    }
}

function deleteTask(taskName) {
    let sameTask = searchTask(taskName);
    if (sameTask) {
        list.splice(+sameTask, 1);
    } else {
        console.log('такой задачи не существует');
    }
}

function changePriority(taskName, taskPriority) {
    let sameTask = searchTask(taskName);
    if (sameTask) {
        list[+sameTask].priority = taskPriority;
    } else {
        console.log('такой задачи не существует');
    }
}

function showList() {
    let listString = '';

    for (let key in listStasus) {
        listString += `${key}:\n`;
        let tasksString = list.reduce((resultString, item) => {
            return item.status === listStasus[key] ?
                resultString += `\t${item.name}:${item.priority}\n` : resultString;
        }, '');

        listString += tasksString || '\t-\n';
    }
    return listString
}

function searchTask(taskName) {
    let index;
    list.some((task, i) => task.name === taskName ? index = i + '' : false);
    return index
}


addTask('work', listPriority.HIGH);
addTask('sleep', listPriority.HIGH)
addTask('sport', listPriority.LOW);
changeStatus('work', listStasus.INPROGRESS);
changePriority('sleep', listPriority.LOW)
console.log(showList())
