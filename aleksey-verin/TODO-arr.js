let list = [
    { name: 'create a post', status: 'In progress', priority: 'low'  }, 
    { name: 'test', status: 'Done', priority: 'high'  } ] 

const STATUS = {
    TO_DO: "Todo",
    IN_PROGRESS: "In progress",
    DONE: "Done",
}

const PRIORITY = {
    LOW: "low",
    MEDIUM: "medium",
    HIGH: "high",
}

const ERRORS = {
    NAME_OF_TASK_NOT_FOUND: "Имя задачи не найдено!",
    NAME_OF_TASK_IS_EMPTY: "Введите имя задачи!",
    NAME_OF_PRIORITY_IS_EMPTY_OR_WRONG: `Введите корректный приоритет задачи ('${PRIORITY.LOW}', '${PRIORITY.MEDIUM}' или '${PRIORITY.HIGH}')`,
    NAME_OF_STATUS: `Статус может быть только '${STATUS.TO_DO}', '${STATUS.IN_PROGRESS}' или '${STATUS.DONE}'`,
    SAME_STATUS: "Данная задача имеет такой же статус. Введите другой",
    SAME_PRIORITY: "Данная задача имеет такой же приоритет. Введите другой",
}

function addTaskAndPriority(nameOfTask, nameOfPriority) { 
    if (!nameOfTask) {
        return console.log(ERRORS.NAME_OF_TASK_IS_EMPTY)
    }
    if (!PRIORITY[nameOfPriority.toUpperCase()]) {
        return console.log(ERRORS.NAME_OF_PRIORITY_IS_EMPTY_OR_WRONG)
    }
    return list = list.concat({name: nameOfTask, status: STATUS.TO_DO, priority: nameOfPriority})
    
}

function deleteTask(nameOfTask) {
    if (list.every((item) => item.name !== nameOfTask)) {
        return console.log(ERRORS.NAME_OF_TASK_NOT_FOUND)
    } else {
        return list = list.filter((item) => item.name !== nameOfTask)
    }
}

function changeStatus(nameOfTask, nameOfStatus) {
    if (list.every((item) => item.name !== nameOfTask)) {
        return console.log(ERRORS.NAME_OF_TASK_NOT_FOUND)
    }
    if (Object.values(STATUS).every((item) => item !== nameOfStatus)) {
        return console.log(ERRORS.NAME_OF_STATUS)
    }

    list = list.map((item) => {
        if (item.name == nameOfTask) {
            if (item.status == nameOfStatus) {
                console.log(ERRORS.SAME_STATUS)
            }
            item.status = nameOfStatus
        } 
            return item  
    })
}

function changePriority(nameOfTask, nameOfPriority) {
    if (list.every((item) => item.name !== nameOfTask)) {
        return console.log(ERRORS.NAME_OF_TASK_NOT_FOUND)
    }
    if (Object.values(PRIORITY).every((item) => item !== nameOfPriority)) {
        return console.log(ERRORS.NAME_OF_PRIORITY_IS_EMPTY_OR_WRONG)
    }

    list = list.map((item) => {
        if (item.name == nameOfTask) {
            if (item.priority == nameOfPriority) {
                console.log(ERRORS.SAME_PRIORITY)
            }
            item.priority = nameOfPriority
        } 
            return item  
    })
}

function showList() {
    let checkList = []
    
    console.group(`${STATUS.TO_DO}:`)
    checkList = list.filter((item) => item.status == STATUS.TO_DO)
    if (checkList.length !== 0) {
        checkList.forEach((item) => console.log(`${item.name} (${item.priority})`))
    } else {
        console.log('---')
    }
    console.groupEnd()

    console.group(`${STATUS.IN_PROGRESS}:`)
    checkList = list.filter((item) => item.status == STATUS.IN_PROGRESS)
    if (checkList.length !== 0) {
        checkList.forEach((item) => console.log(`${item.name} (${item.priority})`))
    } else {
        console.log('---')
    }
    console.groupEnd()

    console.group(`${STATUS.DONE}:`)
    checkList = list.filter((item) => item.status == STATUS.DONE)
    if (checkList.length !== 0) {
        checkList.forEach((item) => console.log(`${item.name} (${item.priority})`))
    } else {
        console.log('---')
    }
    console.groupEnd()
}

showList()
addTaskAndPriority('Take a break', 'high')
addTaskAndPriority('Make a cake', 'low')
addTaskAndPriority('Make a call', 'medium')
changeStatus('Take a break','In progress')
changeStatus('Make a cake', 'Done')
changePriority('Make a cake', 'high')
deleteTask('Take a break')
showList()
