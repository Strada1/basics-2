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

function deleteTask(item) {
    if (item in tasks) {
        delete tasks[item];
    }
}

function addTask(item) {
    if(item in tasks) {
        return true;
    } else return tasks[item] = status.TO_DO;
}

function changeStatus(item, changedStatus) {
    if(item in tasks) {
        tasks[item] = status[changedStatus];
    }
}

function showList() {
    console.log('Done:');
        for(item in tasks) {
            if(tasks[item] == 'Done') {
                console.log(item);
            }
        };
    console.log('In Progress:');
        for(item in tasks) {
            if(tasks[item] == 'In Progress') {
                console.log(item);
            }
        };
    console.log('To do:');
        for(item in tasks) {
            if(tasks[item] == 'To do') {
                console.log(item);
            }
        };
}


addTask('Do the dishes');
deleteTask('create a new practice task');
changeStatus('make the bed', 'DONE');
console.log(tasks);
showList();