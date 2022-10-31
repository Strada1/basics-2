const PRIORITY = {
    LOW: 'low',
    HIGH: 'high',
}
const STATUS = {
    IN_PROGRESS: 'In Progress',
    DONE: 'Done',
}

const POST = {
    CREAT_A_POST: 'Creat a post',
    TEST: 'test',
}

let list = [
    { name: 'create a post', status: 'In progress', priority: 'low'  },
    { name: 'test', status: 'Done', priority: 'high'  }
];

function changeStatus (task, newStatus) {
    let element = list.find(object => object.name === task);

    if (element === undefined) {
        console.log(`задача ${task} отсутствует в списке`)
    } else {
        element.status = newStatus;
    }
}

function deleteTask(task) {
    let element = list.find(object => object.name === task);
    if (!element) {
        console.log(`Задача ${task} отсутствует в списке`)
    } else {
        list = list.filter(task => task.name !== element.name);
    }
}

function addTask(task, priority) {
    let element = list.find(object => object.name === task)
    if (!element) {
        list.push({name: task, status: STATUS.IN_PROGRESS, priority:priority})
    } else {
        console.log(`Такая задача ${task} существует`)
    }
}

function showList() {
    let checkToDo;
    let checkInProgress;
    let checkDone;

    console.log('ToDo:')
    list.forEach(function (object) {
    if (object.status === STATUS.IN_PROGRESS) {
       checkToDo = true;
       console.log(`\t${object.name} , ${object.priority}`);
    }
    })
    if (!checkToDo) {
        console.log('\t-');
    }

    console.log('In Progress:')
    list.forEach(function(object) {
    if(object.status === STATUS.IN_PROGRESS) {
        checkInProgress = true;
        console.log(`\t${object.name} , ${object.priority}`)
    }
    })
    if (!checkInProgress) {
        console.log('\t-');
}
    console.log('Done:')
    list.forEach(function(object) {
    if(object.status === STATUS.DONE) {
        checkDone = true;
        console.log(`\t${object.name}`);
    }
    })
     if (!checkDone) {
        console.log('\t-')
}
}

changeStatus(POST.TEST, 'old');
deleteTask('create a post');
addTask('sleep', PRIORITY.HIGH)
addTask('no sleep', PRIORITY.LOW)
addTask('complete', PRIORITY.HIGH)
showList()
console.log(list)












