const STATUS = {
    DONE: 'Done',
    TO_DO: 'To Do',
    IN_PROGRESS: 'In Progress',
}

const PRIORITY = {
    NO: 'no',
    LOW: 'low',
    HIGH: 'high',
    MEDIUM: 'medium',
}

const ERROR = {
    EMPTY: 'Empty value.',
    NOT_FOUND: 'No such task.',
    REPEAT_TASK: 'Task already exists, please enter another one.',
    REPEAT_STATUS: 'This status has already been assigned',
    REPEAT_PRIORITY: 'This priority has already been assigned',
}

const list = [ 
    { 
        name: 'create a post', 
        status: STATUS.IN_PROGRESS, 
        priority: PRIORITY.LOW,  
    }, 
    { 
        name: 'test', 
        status: STATUS.DONE, 
        priority: PRIORITY.HIGH,
    },
    { 
        name: 'test3', 
        status: STATUS.IN_PROGRESS, 
        priority: PRIORITY.HIGH,
    }
]

function checkIndexTask(task) {
    let index = list.findIndex(function searchIndex(el) {
        return el.name === task
    });
    return index;
}

function changeStatusAndPriority(task, status, priority) {
    if (!task || !status) return task + console.log(ERROR.EMPTY);
    if (checkIndexTask(task) === -1) {
        return console.log(ERROR.NOT_FOUND)
    }
    list.forEach(function changeStatus(el) {
        if (el.name === task && el.status !== status) {
            return el.status = status;
        } else if (el.name === task && el.status === status) {
            console.log(ERROR.REPEAT_STATUS)
        }
    }) 

    list.forEach(function changePriority(el) {
        if (el.name === task && el.priority !== priority) {
            return el.priority = priority;
        } else if (el.name === task && el.priority === priority) {
            console.log(ERROR.REPEAT_PRIORITY)
        }
    }) 
}

changeStatusAndPriority('test', STATUS.IN_PROGRESS, PRIORITY.MEDIUM);

function addTask(task) {
    if (!task) return task + console.log(ERROR.EMPTY);
    if (checkIndexTask(task) === -1) {
        list.push({
            name: task,
            status: STATUS.TO_DO,
            priority: PRIORITY.NO,
        })
    } else {
        console.log(ERROR.REPEAT_TASK);
    }
}

addTask('test2');
addTask('test');
addTask('adding task');
addTask('');


function deleteTask(task) {
    if (!task) return task + console.log(ERROR.EMPTY);
    if (checkIndexTask(task) !== -1) {
        let indexTask = checkIndexTask(task);
        list.splice(indexTask, 1);
    } else {
        console.log(ERROR.NOT_FOUND);
    }
}

deleteTask('test2');


function showList() {
    recapTasksByStatus(STATUS.TO_DO);
    recapTasksByStatus(STATUS.IN_PROGRESS);
    recapTasksByStatus(STATUS.DONE);
}

function recapTasksByStatus(status) {
    let recap = `${status}:`;
    list.forEach(function showStatus(el) {
    if (el.status === status) {
        recap += `\n\t'${el.name}' (priority: ${el.priority})`;
        }
    }) 
    if (recap.indexOf(' ') === -1) {
        recap += `\n\t-`;
    }
    return console.log(recap);
}

showList(); 