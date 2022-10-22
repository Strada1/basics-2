const status = {
    DONE: 'Done',
    IN_PROGRESS: 'In Progress',
    TO_DO: 'To do',
}

const tasks = {
    'create a new practice task': status.DONE,
    'make the bed': status.IN_PROGRESS,
    'write a post': status.TO_DO,
}

const errors = {
    error: 'No such task',
}

function deleteTask(item) {
    if (item in tasks) {
        delete tasks[item];
    } else return errors.error
}

function addTask(item) {
    if(item in tasks) {
        return true;
    } else return tasks[item] = status.TO_DO;
}

function changeStatus(item, changedStatus) {
    if(item in tasks) {
        tasks[item] = status[changedStatus];
    } return errors.error
}

function showList() {
    let doneList = '';
    let inProgressList = '';
    let toDoList = '';
        for(item in tasks) {
            if(tasks[item] == 'Done') {
                doneList += item + '\n';
            }
        };
        for(item in tasks) {
            if(tasks[item] == 'In Progress') {
                inProgressList += item + '\n';
            }   
        };
        for(item in tasks) {
            if(tasks[item] == 'To do') {
                toDoList += item + '\n';
            } 
        };
        console.log('\n');

if(doneList !== '') {
    console.log(`Done:\n ` + doneList);
} else {
    console.log('Done:\n - \n');
}
if(inProgressList !== '') {
    console.log(`In Progress:\n ` + inProgressList);
} else {
    console.log('In Progress:\n - \n');
}
if(toDoList !== '') {
    console.log(`To Do:\n ` + toDoList);
} else {
    console.log('To Do:\n - \n');
}
};

addTask('Do the dishes');
deleteTask('create a new practice task');
console.log(deleteTask('walk'));
changeStatus('make the bed', 'DONE');
console.log(tasks);
showList();