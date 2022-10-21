const list = {
    'create a new practice task': 'In Progress',
    'make a bed': 'Done',
    'write a post': 'To Do',
}

function changeStatus(task, status, object){
    object[task] = status;
}

function addTask(newTask, object){
    object[newTask] = 'To Do';
}

function deleteTask(task, object){
    delete object[task];
}

function showList(object){
    let itExists = 0;
    console.log('To Do:');
    for (key in object){
        if (object[key] === 'To Do'){
            console.log('   ', key);
            itExists++;
        }
    }
    if (itExists === 0){
        console.log('– \n');
    }
    itExists = 0;
    console.log('In Progress:');
    for (key in object){
        if (object[key] === 'In Progress'){
            console.log('   ', key);
            itExists++;
        }
    }
    if (itExists === 0){
        console.log('– \n');
    }
    itExists = 0;
    console.log('Done:');
    for (key in object){
        if (object[key] === 'Done'){
            console.log('   ', key);
            itExists++;
        }
    }
    if (itExists === 0){
        console.log('– \n');
    }
}

showList(list);
console.log('\n');
changeStatus('write a post', 'Done', list);
showList(list);
console.log('\n');
addTask('have a walk', list);
showList(list);
console.log('\n');
deleteTask('make a bed', list);
showList(list);