const STATUS = {
    TODO: "To Do",
    DONE: "Done",
    INPROGRESS: "In progress",
}
const ERROR = {
    NOCHANGE: "Can't change status. No such task in list",
    NODELETE: "Check task to delete. Now no such task to delete",
}
const list = [
    { name: "make breakfast", status: STATUS.DONE },
    { name: "do work", status: STATUS.TODO },
    { name:"do homework", status: STATUS.INPROGRESS },
    { name:"do strada", status: STATUS.TODO },
]
    function changeStatus(nameTask,newStatus) {
        let task = list.find(item => item.name == nameTask);
        if (task == undefined)
        {
            console.log(ERROR.NOCHANGE);
        }
        else {
            task.status = newStatus;
        }
}
function deleteTask(nameTask) {
    let task = list.findIndex(item => item.name == nameTask);
    if (task == "-1") {
        console.log(ERROR.NODELETE);
    } else {
        list.splice(task, 1);
    }
}
function addTask(nameTask) {
    list.push({name:nameTask,status:STATUS.TODO});
}
function showList() {
    let todo = "";
    let inprogress = "";
    let done = "";
    for (let task of list) {
        if (task.status == STATUS.TODO) {
            todo += "\t"+task.name+"\n";
        } else if (task.status == STATUS.INPROGRESS) {
            inprogress += "\t"+task.name + "\n";
        } else if (task.status == STATUS.DONE) {
            done += "\t"+task.name + "\n";
        }
    } console.log(STATUS.TODO + ":\n" + todo+STATUS.INPROGRESS+":\n"+inprogress+STATUS.DONE+":\n"+done);
}
changeStatus("do strada", STATUS.DONE);
deleteTask("make breakfast");
addTask("make bed");
showList();