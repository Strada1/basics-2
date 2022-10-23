
const statusTask = {
    ToDo: 'To Do',
    InProgress: 'In Progress',
    Done: 'Done',
}

// Объект тудушки, в которую записываются задания
const list = {
    'task': 'In Progress',
    'make a bed': 'Done',
    'write a post': 'To Do',
}

// Меняет статус задачи
function changeStatus(task, stat) {
    if (task in list) {
        list[task] = stat;
    }
};

// Добавляет новую задачу
function addTask(newTask) {
    list[newTask] = statusTask.ToDo;
};

// Удаляет задачу из списка
function deleteTask(deleteTask) {
    delete list[deleteTask];
};

// Выводит весь список дел
function showList() {
    let checkTaskTodo = 0;
    let checkTaskInProgress = 0;
    let checkTaskDone = 0;
    console.log('To Do:')
        for (let key in list) {
            if (list[key] == statusTask.ToDo) {
                checkTaskTodo += 1;
                console.log('\t' + key);
            }
        };
    if (checkTaskTodo == 0) {
        console.log('-');
    };
        console.log('In Progress:')
        for (let key in list) {
            if (list[key] == statusTask.InProgress) {
                checkTaskInProgress += 1;
                console.log('\t' + key);
            }
        };
    if (checkTaskInProgress == 0) {
        console.log('-');
    };
        console.log('Done:')
        for (let key in list) {
            if (list[key] == statusTask.Done) {
                checkTaskDone += 1;
                console.log('\t' + key);
            }
        };
    if (checkTaskDone == 0) {
        console.log('-');
    }
    };


addTask('New popular task');
deleteTask('task');
addTask('drink coffee');
changeStatus('drink coffee', 'In Progress');
addTask('buy comp');
changeStatus('buy comp', 'asdda');
changeStatus('first task', 'Done');
showList();
