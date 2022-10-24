const list = {}

function changeStatus(task, status) {
    list[task] = status
}

function addTask(task, status = 'To Do') {
    list[task] = status
}

function deleteTask(task) {
    delete list[task]
}

function showList() {
    const todo = []
    const inProgress = []
    const done = []

    for (status in list) {
        if (list[status] === 'To Do') {
            todo.push(status)
        }
        if (list[status] === 'In Progress') {
            inProgress.push(status)
        }
        if (list[status] === 'Done') {
            done.push(status)
        }
    }

    function render(status, statusList) {
        if (statusList.length) {
            console.log(`${status}: \n ${statusList.join('\n ')}`)
        } else {
            console.log(`${status}: \n -`)
        }
    }

    render('To Do', todo)
    render('In Progress', inProgress)
    render('Done', done)
}

changeStatus('go walk', 'Done')
addTask('go code')
addTask('go work')
addTask('go gym')
addTask('go game')
addTask('go chill')
deleteTask('go walk')
changeStatus('go walk', 'Done')
changeStatus('go work', 'In Progress')
showList()