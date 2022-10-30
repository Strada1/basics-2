const STATUS = {
    IN_PROGRESS: "In Progress",
    DONE: "Done",
    TO_DO: "To Do",
}

const PRIORITY = {
    LOW: "low",
    HIGH: "high",
}

const list = [];

function addTask(taskName) {
    if (list.find(item => item.name === taskName)) {
        console.log(`Задача "${taskName}" уже есть в списке дел!`);
        return;
    }
    if (taskName.trim().length === 0) {
        console.log(`Имя задачи не может быть пустым!`);
        return;
    }
    list.push( {name: taskName, status: STATUS.TO_DO, priority: PRIORITY.LOW} );
    console.log(`Задача "${taskName}" добавлена в список дел!`);
}

function deleteTask(taskName) {
    const index = list.findIndex(item => item.name === taskName)
    if (index === -1) {
        console.log(`Задачи "${taskName}" нет в списке дел!`);
        return;
    }
    list.splice(index, 1);
    console.log(`Задача "${taskName}" удалена!`);
}


function changeStatus(taskName, taskStatus) {
    const index = list.findIndex(item => item.name === taskName)
    if (index === -1) {
        console.log(`Задачи "${taskName}" нет в списке дел!`);
        return;
    }
    for (let key in STATUS) {
        if (STATUS[key] === taskStatus) {
            list[index].status = taskStatus;
            console.log(`Задаче "${taskName}" задан статус "${taskStatus}"!`);
            return;
        }    
    }
    console.log(`Не допустимый статус "${taskStatus}"!`);
}

function changePriority(taskName, taskPriority) {
    const index = list.findIndex(item => item.name === taskName)
    if (index === -1) {
        console.log(`Задачи "${taskName}" нет в списке дел!`);
        return;
    }
    for (let key in PRIORITY) {
        if (PRIORITY[key] === taskPriority) {
            list[index].priority = taskPriority;
            console.log(`Задаче "${taskName}" задан приотритет "${taskPriority}"!`);
            return;
        }    
    }
    console.log(`Не допустимый проиритет "${taskPriority}" задачи "${taskName}"!`);
}

function showList() {
    for (let st in STATUS) {
        console.log(STATUS[st] + ":")
        let isEmptyTasks = true;
        for (task of list) {
            if (STATUS[st] === task.status) {
                isEmptyTasks = false;
                console.log(`\t"${task.name}" \tPriority: ${task.priority}`);
            }
        }
        if (isEmptyTasks) console.log("\t-");
    }
}

//---------------------------------------------
addTask("new 1");
addTask("new 1");
addTask("new 2");
showList();
deleteTask("new 2");
deleteTask("new 2");
changeStatus('new 1', 'Done');
showList();
addTask('new 3');
changePriority('new 3', 'high');
showList();