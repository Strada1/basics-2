const list = [
    { name:"create a post", status:"In progress", priority: "low" },
    { name:"test", status:"Done", priority:"high" },
];

const TODO_STATUS = {
    IN_PROGRESS: "In Progress",
    DONE: "Done",
    TODO: "To Do",
};

const PRIORITY = {
    LOW: "low",
    HIGH: "high",
};

function changeStatus(taskName,taskStatus) {
if (!statusExist(taskStatus)) {
    console.log("Такого статуса выполнения задачи не существует");
} else if (!taskExist(taskName)) {
    console.log("Такой задачи не существует");
} else {
    let foundedTask = list.filter(item => item.name === taskName);
    return foundedTask.status = taskStatus;
}
}

function addTask(taskName,taskPriority) {

    if (!priorityExist(taskPriority)) {
        console.log ("Выберите существующий приоритет задачи");
    } else {
        let defaultStatus = TODO_STATUS.TODO
        list.push({ name: taskName, status: defaultStatus, priority: taskPriority })
    }
}

addTask("play football","low");
addTask("relax", "very high");
addTask("relax", "high");
addTask("running","high");
addTask("wash a car", "low");
addTask("sleeping", "low");
console.log(list);

function deleteTask(taskName) {

    if (!taskExist(taskName)) {
    console.log ("Вы пытаетесь удалить несуществующую задачу");
    } else {
        let deleteTaskIndex = list.findIndex(item => item.name === taskName);
        list.splice(deleteTaskIndex, 1);
}
}

deleteTask("play football");
deleteTask("fly to the moon");
console.log(list);

function priorityExist(taskPriority){
    return (PRIORITY.HIGH === taskPriority || PRIORITY.LOW === taskPriority);
}

function statusExist(taskStatus){
    return (TODO_STATUS.IN_PROGRESS === taskStatus
        || TODO_STATUS.TODO === taskStatus
        || TODO_STATUS.DONE === taskStatus);
}

function taskExist(taskName) {
    return list.some(item => item.name === taskName)
}

    function showCategory(taskCategory) {
        console.log(`${taskCategory}:`);
        list.forEach(item => {
            if (item.status === taskCategory) {
                list.sort(taskPriority => {
                    if (taskPriority === PRIORITY.HIGH) return 1;
                    if (taskPriority === PRIORITY.LOW) return -1;
                });
                console.log(`\t${item.name}\n`);
            }
        });
    }

function showList() {
    showCategory(TODO_STATUS.TODO);
    showCategory(TODO_STATUS.IN_PROGRESS);
    showCategory(TODO_STATUS.DONE);
}

showList();