const list = {
	"create a new practice task": "In Progress",
	"make a bed": "Done",
	"write a post": "To Do",
};

const STATUS = {
    TODO : "To Do",
    IN_PROGRESS : "In Progress",
    DONE : "Done",
}

function chekError(task, status) {
    let errorTask = true;
    for (let key in list) {
        if (key == task) errorTask = false;
    }
    if (errorTask) {
        console.log('Данная задача отсутствует в списке задач');
    }

    let errorStatus = true;
    for (let key in STATUS) {
        if (STATUS[key] == status) errorStatus = false;
    }
    if (errorStatus && status !== undefined ) {
        console.log('Проверте правильность указанного статуса задачи');
    }

    if (status === undefined) errorStatus = false;

    return (errorStatus || errorTask)
}

function changeStatus(task, status) {
   if ( !chekError(task, status) ) {
    list[task] = status;
   } else {
    console.log('При выполнении задачи changeStatus возникла ошибка');
   }
}

function addTask (task) {
    list[task] = STATUS.TODO;
}

function deleteTask(task) {
    if ( !chekError(task) ) {
        delete list[task];
    } else {
        console.log('При выполнении задачи deleteTask возникла ошибка');
       }
}

function showList() {
    for (let key in STATUS) {
        console.log(key + ':');
        let checkTask = false;

        for (let task in list) {
            if (list[task] == STATUS[key]) {
                console.log(`    ${task}`);
                checkTask = true;
            }
        }
        if (!checkTask) console.log('    -')
    }
}


addTask('have a walk');
addTask('task with count');
changeStatus('have a walk', "Done");
deleteTask('make a bed')
deleteTask('have a walk')


for (let key in list) {
    console.log(key + ':   ' + list[key]);
}

showList();