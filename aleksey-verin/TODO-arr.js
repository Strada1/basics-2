const list = [
    { name: 'create a post', status: 'In progress', priority: 'low'  }, 
    { name: 'test', status: 'Done', priority: 'high'  } ] 

const STATUS = {
    TO_DO: "To do",
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
        console.log(ERRORS.NAME_OF_TASK_IS_EMPTY)
    } else if (nameOfPriority !== PRIORITY.LOW 
            && nameOfPriority !== PRIORITY.MEDIUM
            && nameOfPriority !== PRIORITY.HIGH) {
        console.log(ERRORS.NAME_OF_PRIORITY_IS_EMPTY_OR_WRONG)
    } else {
        return list.push({name: nameOfTask, status: STATUS.TO_DO, priority: nameOfPriority})
    }
}

function deleteTask(nameOfTask) {
    let check = list.findIndex(function(item) {
        return item.name == nameOfTask
    })

    if (check == -1) {
        console.log(ERRORS.NAME_OF_TASK_NOT_FOUND)
    } else {
        list.splice(check,1)
    }
}

function changeStatus(nameOfTask, nameOfStatus) {
    if (nameOfStatus !== STATUS.TO_DO 
     && nameOfStatus !== STATUS.IN_PROGRESS 
     && nameOfStatus !== STATUS.DONE) {
        console.log(ERRORS.NAME_OF_STATUS)
    } else {
        let check = list.findIndex(function(item) {
            return item.name == nameOfTask
        })
        
        if (check == -1) {
            console.log(ERRORS.NAME_OF_TASK_NOT_FOUND)
        } else if (list[check].status == nameOfStatus){
            console.log(ERRORS.SAME_STATUS)
        } else {
            list[check].status = nameOfStatus
        }
    }
}

function changePriority(nameOfTask, nameOfPriority) {
    if (nameOfPriority !== PRIORITY.LOW 
     && nameOfPriority !== PRIORITY.MEDIUM 
     && nameOfPriority !== PRIORITY.HIGH) {
        console.log(ERRORS.NAME_OF_PRIORITY_IS_EMPTY_OR_WRONG)
    } else {
        let check = list.findIndex(function(item) {
            return item.name == nameOfTask
        })

        if (check == -1) {
            console.log(ERRORS.NAME_OF_TASK_NOT_FOUND)
        } else if (list[check].priority == nameOfPriority){
            console.log(ERRORS.SAME_PRIORITY)
        } else {
            list[check].priority = nameOfPriority
        }
    }
}

function showList() {
    console.group(`${STATUS.TO_DO}:`)
    let check = 0
    for (let i = 0; i < list.length; i++) {
        if (list[i].status == STATUS.TO_DO) {
            console.log(`${list[i].name} (${list[i].priority})`)
            check++
        }
    }
    if (check == 0) {
        console.log('---')
    }
    console.groupEnd()

    console.group(`${STATUS.IN_PROGRESS}:`)
    check = 0
    for (let i = 0; i < list.length; i++) {
        if (list[i].status == STATUS.IN_PROGRESS) {
            console.log(`${list[i].name} (${list[i].priority})`)
            check++
        }
    }
    if (check == 0) {
        console.log('---')
    }
    console.groupEnd()

    console.group(`${STATUS.DONE}:`)
    check = 0
    for (let i = 0; i < list.length; i++) {
        if (list[i].status == STATUS.DONE) {
            console.log(`${list[i].name} (${list[i].priority})`)
            check++
        }
    }
    if (check == 0) {
        console.log('---')
    }
    console.groupEnd()
}

// console.log(list)
// showList()
addTaskAndPriority('Take a break', 'high')
addTaskAndPriority('Make a cake', 'low')
addTaskAndPriority('Make a call', 'medium')
changeStatus('Take a break','In progress')
changeStatus('Make a cake', 'Done')
changePriority('Make a cake', 'high')
deleteTask('Take a break')
showList()
// console.log(list)

