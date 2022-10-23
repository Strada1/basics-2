const STATUS = {
    TODO: "To Do",
    DONE: "Done",
    INPROGRESS: "In progress",
}
const ERROR = {
    NOCHANGE: "Can't change status. No such task in list",
    NODELETE: "Check task to delete. Now no such task to delete",

}
const list = {
    "make breakfast": STATUS.DONE,
    "do homework": STATUS.INPROGRESS,
    "do strada": STATUS.TODO,
}
function changeStatus(nameTask, newStatus) {
    if (nameTask in list) {
        if (newStatus == STATUS.DONE || newStatus == STATUS.TODO || newStatus == STATUS.INPROGRESS)
        { list[nameTask] = newStatus; }
    } else (console.log(ERROR.NOCHANGE))
}
function deleteTask(nameTask) {
    if (nameTask in list) {
        delete list[nameTask];
    } else (console.log(ERROR.NODELETE))
}
function addTask(nameTask) {
    for (let task in list) {
        task = nameTask;
        list[task] = STATUS.TODO;
    }
}
function showList() {
    let done = "";
    let todo = "";
    let inprogress = "";
    for (let task in list) {
        if (list[task] == STATUS.DONE) {
            done += "\n\t" + task;
        } else if (list[task] == STATUS.TODO) {
            todo += "\n\t" + task;
        } else if (list[task] == STATUS.INPROGRESS) {
            inprogress += "\n\t" + task;
        }
    }
    if (done == "") {
        done += "--";
    } else if (todo == "") {
        todo += "--";
    } else if (inprogress == "") {
        inprogress += "--";
    }
    return (STATUS.TODO + ": " + todo + "\n" + STATUS.INPROGRESS + ": " + inprogress+ "\n" + STATUS.DONE+": " + done + "\n");
}
changeStatus("do homework", "done");//change status of "do homework" on "done"
deleteTask("do strada");//delete task "do strada"
addTask("do 5 tasks");//add task with "to do" status, named "do 5 tasks"
console.log(showList());//show to do list after all changes