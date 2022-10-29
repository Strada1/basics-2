const list = [
    { name: 'create a post', status: 'In progress', priority: 'low' },
    { name: 'test', status: 'Done', priority: 'high' },
]

const STATUS = {
    TODO: "To Do",
    IN_PROGRESS: "In Progress",
    DONE: "Done",
}


const PRIORITY = {
    LOW: 'low',
    HIGH: 'high'
};

function chekError(task, status, priority) {
    let errorTask = true;
    list.forEach(item => {
        if (item.name == task) errorTask = false;
    })
    if (errorTask) {
        console.log('Данная задача отсутствует в списке задач');
    }

    let errorStatus = true;
    list.forEach(item => {
        if (item.status == status) errorStatus = false;
    })

    if (errorStatus && status !== undefined) {
        console.log('Проверте правильность указанного статуса задачи');
    }

    if (status === undefined) errorStatus = false;

    return (errorStatus || errorTask)
}

function changeStatus(task, status, priority = 'low') {
    if (!chekError(task, status, priority)) {
        list.forEach((item) => {
            if (item.name == task) {
                item.status = status;
                item.priority = priority;
            }
        });
    } else {
        console.log('При выполнении задачи changeStatus возникла ошибка');
    }
}


function addTask(task, status, priority = 'low') {
    list.push({ name: task, status: status, priority: priority });
}

function deleteTask(task) {
    if (!chekError(task)) {
        list.forEach((item, index) => {
            if (item.name == task) {
                list.splice(index, 1);
            }
        });
    } else {
        console.log('При выполнении задачи deleteTask возникла ошибка');
    }
}

function showList() {

    for (let key in STATUS) {
        console.log(key + ':');
        let checkTask = false;

        for (let index = 0; index < list.length; index++) {

            if (list[index].status == STATUS[key]) {
                console.log(`    ${list[index].name} : ${list[index].priority}`);
                checkTask = true;
            }
        }

        if (!checkTask) console.log('    -')
    }
}

console.log(list);

changeStatus('create a post', 'Done', 'high');
addTask('wake up', 'Done');

console.log('Измененный массив');
console.log(list);

deleteTask('test');
console.log('После удаления');
console.log(list);

showList();