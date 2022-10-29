const STATUS = {
    TO_DO: 'To Do',
    IN_PROGRESS: 'In Progress',
    DONE: 'Done',
}

const PRIORITY = {
    HIGH: 'High',
    MEDIUM: 'Medium',
    LOW: 'Low',
}

const list = [
    {
        name: 'Create a post',
        status: STATUS.IN_PROGRESS,
        priority: PRIORITY.LOW,
    },
    {
        name: 'Test',
        status: STATUS.DONE,
        priority: PRIORITY.HIGH,
    },]

function changeStatus(taskName, taskStatus, taskPriority){
    if ((taskStatus === STATUS.TO_DO) || (taskStatus === STATUS.IN_PROGRESS) || (taskStatus === STATUS.DONE)){
        let positionTask = list.findIndex(item => item.name === taskName);
        if (positionTask !== -1) {
            list[positionTask].status = taskStatus;
            console.log(`Для ${list[positionTask].name} установлен статус ${list[positionTask].status}.`);
            if (taskPriority === PRIORITY.HIGH || taskPriority === PRIORITY.MEDIUM || taskPriority === PRIORITY.LOW){
                list[positionTask].priority = taskPriority;
                console.log(`Для ${list[positionTask].name} установлен приоритет ${list[positionTask].priority}.`);
            } else {
                list[positionTask].priority = PRIORITY.MEDIUM;
                console.log(`Приоритет должен быть ${PRIORITY.HIGH}, ${PRIORITY.MEDIUM} или ${PRIORITY.LOW}. По умолчанию установлен ${PRIORITY.MEDIUM}.`);
            }
        } else {
            console.log(`${taskName} не найдено в списке дел.`);
        }
    } else {
        console.log(`Статус должен быть ${STATUS.TO_DO}, ${STATUS.IN_PROGRESS} или ${STATUS.DONE}`);
    }
}

function addTask(newTask, priority){
    if (newTask) {
        if (priority === PRIORITY.HIGH || priority === PRIORITY.MEDIUM || priority === PRIORITY.LOW){
            list.push({
                name: newTask,
                status: STATUS.TO_DO,
                priority: priority,
            })
            console.log(`Добавлена задача ${newTask} с приоритетом ${priority}`);
        } else {
            list.push({
                name: newTask,
                status: STATUS.TO_DO,
                priority: PRIORITY.MEDIUM,
            })
            console.log(`Добавлена задача ${newTask}`);
            console.log(`Приоритет должен быть ${PRIORITY.HIGH}, ${PRIORITY.MEDIUM} или ${PRIORITY.LOW}. По умолчанию для задачи ${newTask} установлен приоритет ${PRIORITY.MEDIUM}.`);
        }
    } else {
        console.log('Не введено имя задачи, новая задача не добавлена.');
    }
}

function deleteTask(task){
    let indexToDelete = list.findIndex(item => item.name === task);
    if (indexToDelete !== -1) {
        list.splice(indexToDelete, 1);
        console.log(`Удалена задача ${task}.`);
    } else {
        console.log(`Задача не найдена.`);
    }
}

function showList() {
    let taskExists = false;
    console.group(STATUS.TO_DO, '\b:');
    list.forEach((item, index,array) => {
        if (list[index].status === STATUS.TO_DO) {
            console.log(`${list[index].name} (priority: ${list[index].priority}).`);
            taskExists = true;
        }
    });
    if (taskExists === false){
        console.log('–');
    }
    console.groupEnd();
    taskExists = false;
    console.group(STATUS.IN_PROGRESS,'\b:');
    list.forEach((item, index,array) => {
        if (list[index].status === STATUS.IN_PROGRESS) {
            console.log(`${list[index].name} (priority: ${list[index].priority}).`);
            taskExists = true;
        }
    });
    if (taskExists === false){
        console.log('–');
    }
    console.groupEnd();
    taskExists = false;
    console.group(STATUS.DONE, '\b:');
    list.forEach((item, index,array) => {
        if (list[index].status === STATUS.DONE) {
            console.log(`${list[index].name} (priority: ${list[index].priority}).`);
            taskExists = true;
        }
    });
    if (taskExists === false){
        console.log('–');
    }
    console.groupEnd();
}

showList();
console.log('\n');
changeStatus('Create a post', 'Done', 'High');
console.log('\n');
showList();
console.log('\n');
addTask('Have a walk', 'Medium');
console.log('\n');
showList();
console.log('\n');
changeStatus('Have a walk', 'In Progress', 'Medium');
console.log('\n');
showList();
console.log('\n');
deleteTask('Test');
console.log('\n');
showList();
console.log('\n');