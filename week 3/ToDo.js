// Хранилище данных
const list = {
    'read a book': 'Done',
    'watch a movie': 'In Progress',
    'some coding': 'To Do',
}

// Смена статуса
function changeStatus(task, stat) {
    list[task] = stat;
}

// Добавить задачу
function addTask(nameTask) {
    list[nameTask] = undefined;
}

// Удалить задачу
function deleteTask(nameTask) {
    delete list[nameTask];
}

// Вывод списка дел
function showList() {
    console.log('To Do:');
    for (let key in list) {
        if (list[key] == 'To Do') {
            console.log(`\t ${key}`)
        }
    }
    
    console.log('In Progress:');
    for (let key in list) {
        if (list[key] == 'In Progress') {
            console.log(`\t ${key}`)
        }
    }

    console.log('Done:');
    for (let key in list) {
        if (list[key] == 'Done') {
            console.log(`\t ${key}`)
        }
    }
}   


addTask('FAPFAPFAP');
addTask('fapp');
changeStatus('FAPFAPFAP', 'Done');
showList();

console.log(list)


