const list = {
	"create a new practice task": "In Progress",
	"make a bed": "Done",
    "write a post": "To Do",
}

function changeStatus(nameOfTask, status) {
    if ((status !== 'To Do') && (status !== 'In Progress') && (status !== "Done")) {
        console.log('Статус может быть "To Do", "In Progress" или "Done"')
    } else {
        switch (list[nameOfTask]) {
            case undefined:
                console.log('Имя задачи не найдено!')
                break;
            case status:
                console.log(`Задача уже имеет статус "${status}"`)
                break
            default:
                return list[nameOfTask] = status
        }
    }
}

function addTask(nameOfTask) {
    if (!nameOfTask) {
        console.log('Введите имя задачи!')
    } else {
        return list[nameOfTask] = "To Do"
    }
}

function deleteTask(nameOfTask) {
    if (nameOfTask in list) {
        delete list[nameOfTask] 
    } else {
        console.log('Имя задачи для удаления НЕ НАЙДЕНО')
    }
}

function showList() {
    console.group('To Do:')
    let check = 0
    for (key in list) {
        if (list[key] === 'To Do') {
            check++
            console.log(key)
        } 
    }
    if (check == 0) {
        console.log('---')
    }
    console.groupEnd()

    console.group('In Progress:')
    check = 0
    for (key in list) {
        if (list[key] === 'In Progress') {
            check++
            console.log(key)
        } 
    }
    if (check == 0) {
        console.log('---')
    }
    console.groupEnd()

    console.group('Done:')
    check = 0
    for (key in list) {
        if (list[key] === 'Done') {
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