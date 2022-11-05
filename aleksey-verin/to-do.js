const STATUS = {
    TO_DO: "To Do",
    IN_PROGRESS: "In Progress",
    DONE: "Done",
}

const ERRORS = {
    NAME_OF_TASK_NOT_FOUND: "Имя задачи не найдено!",
    NAME_OF_TASK_IS_EMPTY: "Введите имя задачи!",
    STATUS_OF_TASK: `Статус может быть только '${STATUS.TO_DO}', '${STATUS.IN_PROGRESS}' или '${STATUS.DONE}'`,
    SAME_STATUS: `Задача имеет такой же статус. Введите другой`,
}

const list = {
	"create a new practice task": STATUS.IN_PROGRESS,
	"make a bed": STATUS.DONE,
    "write a post": STATUS.TO_DO,
}

function changeStatus(nameOfTask, status) {
    if ((status !== STATUS.TO_DO) && (status !== STATUS.IN_PROGRESS) && (status !== STATUS.DONE)) {
        console.log(ERRORS.STATUS_OF_TASK)
    } else {
        switch (list[nameOfTask]) {
            case undefined:
                console.log(ERRORS.NAME_OF_TASK_NOT_FOUND)
                break;
            case status:
                console.log(ERRORS.SAME_STATUS)
                break
            default:
                return list[nameOfTask] = status
        }
    }
}

function addTask(nameOfTask) {
    if (!nameOfTask) {
        console.log(ERRORS.NAME_OF_TASK_IS_EMPTY)
    } else {
        return list[nameOfTask] = STATUS.TO_DO
    }
}

function deleteTask(nameOfTask) {
    if (nameOfTask in list) {
        delete list[nameOfTask] 
    } else {
        console.log(ERRORS.NAME_OF_TASK_NOT_FOUND)
    }
}

function showList() {
    console.group(`${STATUS.TO_DO}:`)
    let check = 0
    for (key in list) {
        if (list[key] === STATUS.TO_DO) {
            check++
            console.log(key)
        } 
    }
    if (check == 0) {
        console.log('---')
    }
    console.groupEnd()

    console.group(`${STATUS.IN_PROGRESS}:`)
    check = 0
    for (key in list) {
        if (list[key] === STATUS.IN_PROGRESS) {
            check++
            console.log(key)
        } 
    }
    if (check == 0) {
        console.log('---')
    }
    console.groupEnd()

    console.group(`${STATUS.DONE}:`)
    check = 0
    for (key in list) {
        if (list[key] === STATUS.DONE) {
            check++
            console.log(key)
        } 
    }
    if (check == 0) {
        console.log('---')
    }
    console.groupEnd()
}

addTask('Take a break')
addTask('Make a cake')
addTask('Make a call')
changeStatus('Take a break','In Progress')
changeStatus('Make a cake', 'Done')
deleteTask('Take a break')
showList()