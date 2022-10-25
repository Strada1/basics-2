const dash = "-";
const list = {
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
}

function changeStatus(task, status) {
    if (list[task]) {
        list[task] = status;
    } else {
        console.log('такой задачи нет');
    }
};


function addTask(task) {
    if (task in list) {
        console.log('такая задача есть');
    } else {
        list[task] = 'To Do'
    }
};

function deleteTask(task) {
    if (task in list) {
        delete list[task];
    } else {
        console.log('это новая задача')
    }
};

function showList() {
    console.log(`To Do:`);
    for (let key in list) {
        if (list[key] == 'To Do') {
            console.log(`\t'${key}'`)
        }
    }
    for (let key in list) {
        if (list[key] == 'Done') {
            console.log(`\t'${key}'`)
        }
    }
    console.log(`In Progress:`)
    for (let key in list) {
        if (list[key] == 'In Progress') {
            console.log(`\t'${key}'`)
        }
    }
    console.log(`Done:`)
    console.log(`\t${dash}`)
}


changeStatus('make a bed', 'property')
addTask('My Heart')
addTask('San Frank')
deleteTask('write a post')
showList()
console.log(list)












