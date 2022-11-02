'use strict'

const list = [
    { name: 'create a post', status: 'To Do', priority: 'low' },
    { name: 'read a book', status: 'Done', priority: 'high' },
    { name: 'buy a generator', status: 'In progress', priority: 'high' },
    { name: 'buy1 a generator', status: 'To Do', priority: 'high' },
    { name: 'buy a wallet', status: 'Done', priority: 'high' },
];

const STATUS = {
    IN_PROGRESS: 'In progress',
    DONE: 'Done',
    TO_DO: 'To Do',
};

const PRIORITY = {
    HIGH: 'high',
    LOW: 'low',
};

function addTask(arr, name, status = STATUS.DONE, priority = PRIORITY.LOW) {
    const result = arr.find(item => item.name == name);

    if (result != undefined) {
        return console.log(`${name} уже есть в списке\n`);
    }

    arr.push({ name, status, priority });

};

function changeStatus(arr, name, newStatus, priority = PRIORITY.LOW) {

    const checkResult = arr.find(item => item.name == name);
    const checkStatus = arr.find(item => item.status == newStatus && item.name == name);

    if (checkResult == undefined) {
        return console.log(`Невозможно изменить статус. ${name} нет в списке задач.\n`);
    } else if (checkStatus != undefined) {
        return console.log((`Невозможно изменить статус. Для задачи ${name}, уже установлен данный статус.\n`));
    };

    checkResult.status = newStatus;
    checkResult.priority = priority;
    console.log(`Для задачи ${name}, установлен новый статус ${newStatus}\n`);

};

function deleteTask(arr, name) {
    let count = -1;

    arr.filter(function (item, index) {

        if (item.name === name) {
            arr.splice(index, 1);
            count = 1;
            console.log(`Задача ${name} успешно удалена из списка.\n`);
        };
    });

    if (count === -1) {
        console.log(`Операция не может быть выполнена. ${name} отсутствует в списке задач.\n`);
    }

};

function showList(arr) {
    let i;

    const COUNT = {
        IN_PROGRESS: -1,
        DONE: -1,
        TO_DO: -1,
    };

    console.log(`${STATUS.IN_PROGRESS}:`);
    for (i of arr) {
        if (i.status == STATUS.IN_PROGRESS) {
            COUNT.IN_PROGRESS = 1;
            console.log(`${i.name}. Приоритет: ${i.priority}.`);
        };
    } if (COUNT.IN_PROGRESS === -1) {
        console.log(`-`);
    };

    console.log(`\n${STATUS.DONE}:`);
    for (i of arr) {
        if (i.status == STATUS.DONE) {
            COUNT.DONE = 1;
            console.log(`${i.name}. Приоритет: ${i.priority}.`);
        };
    } if (COUNT.DONE === -1) {
        console.log(`-`);
    };

    console.log(`\n${STATUS.TO_DO}`);
    for (i of arr) {
        if (i.status == STATUS.TO_DO) {
            COUNT.TO_DO = 1;
            console.log(`${i.name}. Приоритет: ${i.priority}.`);
        };
    } if (COUNT.TO_DO === -1) {
        console.log('-');
    };

}


deleteTask(list, 'buy a wallet1');
changeStatus(list, 'create a post', STATUS.IN_PROGRESS);
addTask(list, 'create a post1');
showList(list);