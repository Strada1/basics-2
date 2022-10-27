const TODO_STATUS = {
    inProgress: "In Progress",
    done: "Done",
    toDo: "To Do",
}
const list = {
    "create a new practice task": TODO_STATUS.inProgress,
    "make a bed": TODO_STATUS.done,
    "write a post": TODO_STATUS.toDo,
}

function changeStatus(task,status) {
    if (taskExist(task) && statusIsValid(status)) {
        list[task] = TODO_STATUS[status];
        console.log(`Статус задачи \"${task}\" изменен на \"${status}\"`);
    } else {
        console.log ("Выберите существующую задачу и статус");
    }
}

function addTask(newTask) {
    let defaultStatus = TODO_STATUS.toDo;
    if (!taskExist(newTask)) {
        list[newTask] = defaultStatus;
        console.log(`Задача \"${newTask}\" добавлена`);
    } else{
        console.log(`Задача \"${newTask}\" существует, выберите другую`);
    }
}

function deleteTask(task) {
    if (taskExist(task)) {
        delete list[task];
        console.log(`Задача \"${task}\" удалена`);
    } else {
        console.log("Вы пытаетесь удалить несуществующую задачу");
    }
}

function statusIsValid(status) {
    return (status in TODO_STATUS);
}

function taskExist(task) {
    return (task in list);
}

function showList() {
    let inProgress = "In Progress: \n";
    let toDo = "To Do: \n";
    let done = "Done: \n";

    for (let key in list) {
        switch (list[key]) {
            case TODO_STATUS.toDo :
                toDo = toDo + `\t` + key + `\n`;
                break;
            case TODO_STATUS.inProgress :
                inProgress = inProgress + `\t` + key + `\n`;
                break;
            default :
                done = done + `\t` + key + `\n`;
                break;

        }
    }
    console.log(toDo + inProgress + done);
}

changeStatus("make a bed","toDo");
changeStatus("relax","inProgress");
addTask("make a bed");
addTask("relax");
addTask("go to the gym");
changeStatus("relax","done");
console.log(list);
showList();


