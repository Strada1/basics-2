const STATUS = {
    TODO: 'ToDo',
    INPROGRESS: 'In Progress',
    DONE: 'Done',
};

const list = {};
let toDoStat = {};
let inProgressStat = {};
let doneStat = {};


function addTask(task) {
    list[task] = STATUS.TODO
};
    
function changeStatus(task, status) {
    list[task] = status
};

function deleteTask(delTask) {
    delete list[delTask]
};

// Add task
addTask("create a new practice task");
addTask("make a bed");
addTask("write a post");

// Change status
changeStatus("write a post", STATUS.INPROGRESS);


for (let key in list) {

    if (list[key] === STATUS.TODO) {
        toDoStat[key] = '';
    } else if (list[key] === STATUS.INPROGRESS) {
        inProgressStat[key] = '';
    } else if (list[key] === STATUS.DONE) {
        doneStat[key] = '';
    }
};


function showList() {
    console.log ('\n' + 'Todo:')

    for (let key in toDoStat) {
        console.log('\t' + '"' + key + '"')
    }

    console.log('\n' + 'In Progress:')

    for (let key in inProgressStat) {
        console.log('\t' + '"' + key + '"')
    }
    
    console.log('\n' + 'Done:')

    for (let key in doneStat) {
        console.log('\t' + '"' + key + '"')
    }
};

showList()