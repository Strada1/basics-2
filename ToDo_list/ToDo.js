const list = {
    'create a new practice task': 'In Progress',
	'make a bed': 'Done',
	'write a post': 'To Do',
}

function deleteTask (item) {
    if (item in list) {
        delete list[item];
    }
}

function addTask (item) {
    if (item in list) {
        return true;    
    } else {
        return list[item] = 'To Do';
    }
}

function changeStatus (item, changeStatus) {
    if (item in list) {
        return list[item] = changeStatus;
    }
}

function showList() {
    console.log('To Do:');
    for(let item in list) {
        if (list[item] == 'To Do') {
            console.log(`\t${item}`);
        }
    }
    console.log('In Progress:');
    for(let item in list) {
        if (list[item] == 'In Progress') {
            console.log(`\t${item}`);
        } 
    }
    console.log('Done:');
    for(let item in list) {
        if (list[item] == 'Done') {
            console.log(`\t${item}`);
        } 
    }
}

addTask('have lunch');
addTask('go to sleep');

changeStatus('have lunch', 'In Progress');

deleteTask('go to sleep');

showList();
