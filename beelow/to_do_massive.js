const STATUS = {
    IN_PROGRESS: 'In Progress',
    DONE: 'Done',
    TO_DO: 'To Do',
}

const CHECK = {
    CHANGE_STATUS: 'Статус изменен',
    CHANGE_PRIORITY: 'Приоритет изменен',
    ADD_TASK: 'Задача добавлена',
    DELETE_TASK: 'Задача удалена',
}

const ERROR = {
    NOT_TASK: 'Ошибка: Нет такой задачи',
    YES_TASK: 'Ошибка: Такая задача уже есть',
    NOT_STATUS: 'Ошибка: Такой статус не доступен',
    NOT_PRIORITY: 'Ошибка: Такой приоритет не доступен',
    STATUS_NAME: 'Ошибка: Недопустимое название задачи',
}

const PRIORITY = {
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGHT: 'Hight',
};

const DEFAULT_STATUS = STATUS.IN_PROGRESS
const DEFAULT_PRIORITY = PRIORITY.LOW

const list = [
    {
        name: 'Create a new practice task',
        status: STATUS.IN_PROGRESS,
        priority: PRIORITY.LOW,
    },
    {
        name: 'Make a bed',
        status: STATUS.DONE,
        priority: PRIORITY.HIGHT,
    },
    {
        name: 'Write a post',
        status: STATUS.TO_DO,
        priority: PRIORITY.MEDIUM,
    },
];


function changeStatus(findTask, replaceStatus) {
    let findName = list.findIndex(function (findName) {
        return findName.name === findTask;
    });
    if (findName === -1) {
        console.log(ERROR.NOT_TASK)
    } else if (!replaceStatus) {
        console.log(ERROR.NOT_STATUS);
    } else {
        list[findName].status = replaceStatus;
        console.log(CHECK.CHANGE_STATUS);
    }
}

function changePriority(findTask, replacePriority) {
    let findName = list.findIndex(function (findName) {
        return findName.name === findTask;
    }); if (findName === -1) {
        console.log(ERROR.NOT_TASK)
    } else if (!replacePriority) {
        console.log(ERROR.NOT_PRIORITY);
    } else {
        list[findName].priority = replacePriority;
        console.log(CHECK.CHANGE_PRIORITY);
    }
}

function addTask(newTask) {
    let findName = list.findIndex(function (findName) {
        return findName.name === newTask;
    });
    if (findName >= 0) {
        console.log(ERROR.YES_TASK)
    } else if (typeof (newTask) === 'string') {
        list.push(
            {
                name: newTask,
                status: DEFAULT_STATUS,
                priority: DEFAULT_PRIORITY,
            }
        )
        console.log(CHECK.ADD_TASK);
    } else {
        console.log(ERROR.STATUS_NAME);
    }
}

function deleteTask(nameTask) {
    let findName = list.findIndex(function (findName) {
        return findName.name === nameTask;
    });
    if (findName >= 0) {
        list.splice(findName, 1)
    } else {
        console.log(ERROR.NOT_TASK);
    }
}

function showList() {
    let todo = list
        .filter(function (findStatus) {
            return findStatus.status === STATUS.TO_DO;
        })
        .map(function (list) {
            return `${list.name} (Priority: ${list.priority})`;
        })
        .join(', \n')

    let inProgress = list
        .filter(function (findStatus) {
            return findStatus.status === STATUS.IN_PROGRESS;
        })
        .map(function (list) {
            return `${list.name} (Priority: ${list.priority})`;
        })
        .join(', \n')

    let done = list
        .filter(function (findStatus) {
            return findStatus.status === STATUS.DONE;
        })
        .map(function (list) {
            return `${list.name} (Priority: ${list.priority})`;
        })
        .join(', \n')

    if (todo == false) {
        todo = '\n\t-';
    } else if (inProgress == false) {
        inProgress = '\n\t-';
    } else if (done == false) {
        done = '\n\t-';
    }
    console.log(`${STATUS.TO_DO}:\n${todo}`)
    console.log(`${STATUS.IN_PROGRESS}:\n${inProgress}`)
    console.log(`${STATUS.DONE}:\n${done}`)

}


changeStatus('Create a new practice task', STATUS.DONE);
changePriority('Create a new practice task', PRIORITY.MEDIUM);
addTask('Have a walk');
deleteTask('Have a walk')
showList()