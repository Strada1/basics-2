const TODO_STATUS = {
    IN_PROGRESS: "In Progress",
    DONE: "Done",
    TO_DO: "To Do",
}
const list = {}
function changeStatus(taskName, taskStatus) {   
    if (taskName in this) {
        for (let key in TODO_STATUS) {
            if (taskStatus === TODO_STATUS[key]) {
                this[taskName] = taskStatus;
                return;
            }
        }
        console.log(`не возможно присвоить статус ${taskStatus} задаче ${taskName}`);
        return;
    }
    console.log('нет такой задачи в списке дел');
    return;
}
list.changeStatus = changeStatus;

function addTask(taskName) {
    if (taskName in this) {
        console.log('такая задача уже есть в списке дел');
        return;
    }
    this[taskName] = null;
    return;
}
list.addTask = addTask;

function deleteTask(taskName) {
    if (taskName in this) {
        delete this[taskName];
        console.log(`задача ${taskName} удалена из списка дел`);
        return;
    }
    console.log(`задачи ${taskName} нет в списке дел`);
    return;  
}
list.deleteTask = deleteTask;

function showList() {
    for (let key in TODO_STATUS) {
        console.log(TODO_STATUS[key] + ":")
        let emptyTasks = true;
        for (let task in this) {
            if (TODO_STATUS[key] === this[task]) {
                emptyTasks = false;
                console.log("     " + task); 
            }
        }
        if (emptyTasks) console.log("     -");
    }
}
list.showList = showList;

//---------------------------------------------
list.addTask("create a new practice task");
list.addTask("make a bad");
list.addTask("write a post");
list.addTask('have a walk')

list.deleteTask('have a walk');

list.changeStatus("create a new practice task", "In Progress");
list.changeStatus("make a bad", "Done");
list.changeStatus("write a post", "To Do");

console.log("---------------");
list.showList();

list.deleteTask("write a post");

console.log("---------------");
list.showList();