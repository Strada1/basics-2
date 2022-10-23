const STATUS = {
    IN_PROGRESS: 'In Progress',
    DONE: 'Done',
    TO_DO: 'To Do',
}

const CHECK = {
    CHANGE_STATUS: 'Статус изменен',
    ADD_TASK: 'Задача добавлена',
    DELETE_TASK: 'Задача удалена',
}

const ERROR = {
    NO_TASK: 'Ошибка: Нет такой задачи',
    YES_TASK: 'Ошибка: Такая задача уже есть',
    NO_STATUS: 'Ошибка: Такой статус не доступен',
}

const list = {
    'create a new practice task': STATUS.IN_PROGRESS,
    'make a bed': STATUS.DONE,
    'write a post': STATUS.TO_DO,
};

function changeStatus(nameTask, nameStatus) {
    if (nameStatus !== STATUS.IN_PROGRESS && nameStatus !== STATUS.DONE && nameStatus !== STATUS.TO_DO) {
        console.log(ERROR.NO_STATUS);
    } else if (nameTask in list) {
        list[nameTask] = nameStatus;
        console.log(CHECK.CHANGE_STATUS);
    } else {
        console.log(ERROR.NO_TASK);
    }
}

function addTask(newTask) {
    if (newTask in list) {
        console.log(ERROR.YES_TASK);
    } else {
        list[newTask] = STATUS.IN_PROGRESS;
        console.log(CHECK.ADD_TASK);
    }
}

function deleteTask(nameTask) {
    if (nameTask in list) {
        delete list[nameTask]
        console.log(CHECK.DELETE_TASK);
    } else {
        console.log(ERROR.NO_TASK);
    }
}

function showList() {
    let toDo = '';
    let inProgress = '';
    let done = '';
    for (let key in list) {
        if (list[key] === STATUS.TO_DO) {
            toDo += '\n\t' + key;
        } else if (list[key] === STATUS.IN_PROGRESS) {
            inProgress += '\n\t' + key;
        } else if (list[key] === STATUS.DONE) {
            done += '\n\t' + key;
        }
    }

    if (toDo == false) {
        toDo = '\n\t-';
    } else if (inProgress== false) {
        inProgress = '\n\t-';
    } else if (done == false) {
        done = '\n\t-';
    }
    console.log(`${STATUS.TO_DO}:${toDo}`)
    console.log(`${STATUS.IN_PROGRESS}:${inProgress}`)
    console.log(`${STATUS.DONE}:${done}`)
}

changeStatus('create a new practice task', STATUS.DONE);
addTask('have a walk');
deleteTask('have a walk');
showList();
