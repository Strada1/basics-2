const STATUS = {
    DONE: 'Done',
    TO_DO: 'To Do',
    IN_PROGRESS: 'In Progress',
}

const PRIORITY = {
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

let list = [ 
    {name: 'create a post', status: STATUS.IN_PROGRESS, priority: PRIORITY.LOW,}, 
    {name: 'test', status: STATUS.DONE, priority: PRIORITY.HIGH,},
    {name: 'test2', status: STATUS.IN_PROGRESS, priority: PRIORITY.HIGH,},
]
// -------------------------------------------------------------------------
function addTask(task) {
    if (CHECK.EMPTY_TASK(task) || CHECK.REPEAT_TASK(task)) {
        return list;
    } 
    else {
        list = list.concat({
            name: task,
            status: STATUS.TO_DO,
            priority: PRIORITY.LOW,
        }) 
    }
}

function deleteTask(task) {
    if (CHECK.EMPTY_TASK(task) || CHECK.NOT_FOUND_TASK(task)) {
        return list;
    } 
    else {
        list = list.filter(function(el){
            return el.name !== task;
        });
    }
}

function changeStatus(task, status) {
    if (CHECK.EMPTY_TASK(task) || CHECK.NOT_FOUND_TASK(task) || CHECK.REPEAT_STATUS(task, status)) {
        return list;
    } 
    else {
        list = list.map(function(el, id) {
            if (id === CHECK.INDEX_TASK(task)) {
                return {...el, status: status};
            } 
            else {
                return {...el, status: el.status};
            }
        });
    }
}

function changePriority(task, priority) {
    if (CHECK.EMPTY_TASK(task) || CHECK.NOT_FOUND_TASK(task) || CHECK.REPEAT_PRIORITY(task, priority)) {
        return list;
    } 
    else {
        list = list.map(function(el, id) {
            if (id === CHECK.INDEX_TASK(task)) {
                return {...el, priority: priority};
            } 
            else {
                return {...el, priority: el.priority};
            }
        });
    }
}

function showList() {
    recapTasksByStatus(STATUS.TO_DO);
    recapTasksByStatus(STATUS.IN_PROGRESS);
    recapTasksByStatus(STATUS.DONE);
}

function recapTasksByStatus(status) {
    let recap = `${status}:`;
    list.filter(function(el) {
    if (el.status === status) {
        recap += `\n\t'${el.name}'`;
        }
    }) 
    if (recap.indexOf('\n') === -1) {
        recap += `\n\t-`;
    }
    return console.log(recap);
}
// -------------------------------------------------------------------------
const CHECK = {
    EMPTY_TASK(task) {
        if (!task) {
            return task + console.log(ERROR.EMPTY);
        }
    },
    INDEX_TASK(task) {
        const index = list.findIndex(function(el) {
            return el.name === task;
        });
        return index;
    },
    NOT_FOUND_TASK(task) {
        if (!list.some(function(el){
            return el.name === task;
        })) {
            return task + console.log(ERROR.NOT_FOUND);
        }
    },
    REPEAT_TASK(task) {
        if (list.some(function(el){
            return el.name === task;
        })) {
            return task + console.log(ERROR.REPEAT_TASK)
        }
    },
    REPEAT_STATUS(task, status) {
        if (list.some(function(el, id){
            return el.status === status && id === CHECK.INDEX_TASK(task);
        })) {
            return task + console.log(ERROR.REPEAT_STATUS);
        }
    },
    REPEAT_PRIORITY(task, priority) {
        if (list.some(function(el, id){
            return el.priority === priority && id === CHECK.INDEX_TASK(task);
        })) {
            return priority + console.log(ERROR.REPEAT_PRIORITY);
        }
    },
}
// -------------------------------------------------------------------------
changeStatus('test2', STATUS.TO_DO);
changeStatus('create a post', STATUS.DONE);
changeStatus('create a post', STATUS.DONE);
changePriority('test', PRIORITY.MEDIUM);

addTask('test3');
addTask('test');
addTask('adding task');
addTask('');

deleteTask('test3');
deleteTask('test');
deleteTask('x');
deleteTask('');

showList();