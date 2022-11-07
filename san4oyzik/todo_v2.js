const statusTask = {
    TODO: 'To Do',
    IN_PROGRESS: 'In Progress',
    DONE: 'Done',
}

const priority = {
    LOW: 'low',
    HIGH: 'high',
}

let list = [
    {name: 'create a post', status: statusTask.TODO, priority: priority.LOW},
    {name: 'test', status: statusTask.DONE, priority: priority.HIGH},
];

// Добавляет новую задачу, статус и приоритет проставляются автоматически
function addTask(nameTask, priorityTask) {
    // list[newTask] = statusTask.ToDo;
    list.push({name: nameTask, status: statusTask.TODO, priority: priorityTask});
};
// Функция для смены статуса задачи
function changeStatus(nameTask, statusTask) {
    const myTask = list.find((item) => item.name == nameTask);
    if (!myTask) {
        return 'Ошибка, имя задачи не верное!';
    }
    myTask.name;
    myTask.status = statusTask;
    myTask.priority;
};

function deleteTask(nameTask) {
    list = list.filter(function(item)
    {
        return item.name !== nameTask;
    });
}


function showList() {
    const TODO2 = [];
    const IN_PROGRESS2 = [];
    const DONE2 = [];

    list.forEach(function(item) {
        if (item.status === statusTask.TODO) {
            TODO2.push(item);
        };
        if (item.status === statusTask.IN_PROGRESS) {
            IN_PROGRESS2.push(item);
        };
        if (item.status === statusTask.DONE) {
            DONE2.push(item);
        };
    });
    if (TODO2.length === 0) {
        TODO2.push({name: '-'});
    }
    if (IN_PROGRESS2.length === 0) {
        IN_PROGRESS2.push({name: '-'});
    }
    if (DONE2.length === 0) {
        DONE2.push({name: '-'});
    }
    console.log(statusTask.TODO + ':');
        TODO2.forEach((item) => {
            console.log(" " + item.name);
        });
    console.log(statusTask.IN_PROGRESS + ':');
        IN_PROGRESS2.forEach((item) => {
            console.log(" " + item.name);
        });
    console.log(statusTask.DONE + ':');
        DONE2.forEach((item) => {
            console.log(" " + item.name);
        });

}


addTask('New popular task', priority.LOW);
addTask('buy computer', priority.HIGH);
changeStatus('buy computer',statusTask.IN_PROGRESS)
changeStatus('New popular task', statusTask.DONE)
changeStatus('create a post', statusTask.DONE)
deleteTask('test')
showList()
addTask('create TODO на массивах', priority.HIGH);
addTask('Создать интеллект карту в обсидиан', priority.HIGH);
changeStatus('Соть интеллект карту в обсидиан', statusTask.IN_PROGRESS)
showList();
// deleteTask('buy computer')


