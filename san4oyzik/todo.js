
const status = {
    ToDo: 'To Do',
    InProgress: 'In Progress',
    Done: 'Done',
}

// Объект тудушки, в которую записываются задания
const list = {
    'task': 'In progress',
    'create a new task': 'In progress',
    'make a bed': 'Done',
    'write a post': 'Todo',
    'first task': 'Todo',
}

// Меняет статус задачи
function changeStatus(task, stat) {
    list[task] = stat;
};

// Добавляет новую задачу
function addTask(newTask) {
    list[newTask] = 'Todo';
};

// Удаляет задачу из списка
function deleteTask(deleteTask) {
    delete list[deleteTask];
};

// Выводит весь список дел
function showList() {
    console.log('Todo:')
        for (let key in list) {
            if (list[key] == 'Todo') {
                console.log(key);
            }
        };
        console.log('In progress:')
        for (let key in list) {
            if (list[key] == 'In progress') {
                console.log(key);
            }
        };
        console.log('Done:')
        for (let key in list) {
            if (list[key] == 'Done') {
                console.log(key);
            }
        }
    };


addTask('New popular task');
deleteTask('task');
addTask('drink coffee');
showList();
changeStatus('drink coffee', 'In progress')
changeStatus('first task', 'Done');
showList();