const STATUS = {
    TODO: "ToDo",
    IN_PROGRESS: "In Progress",
    DONE: "Done"
}

let arr = [
    {action: "make a bed",   status: STATUS.DONE},
    {action: "write a post", status: STATUS.TODO},
    {action: "feed the cat", status: STATUS.DONE},
    {action: "Drink coffee", status: STATUS.IN_PROGRESS}
]

function changeStatus(actionName, status)
{
    let act = arr.find(item => item.action == actionName);

    act.status = status;

    console.log(act.status);
}

function addTask(Task)
{
    arr.push({action: Task, status: STATUS.IN_PROGRESS});
}

function deleteTask(Task)
{
    let pos = arr.findIndex(item => item.action == Task);

    arr.splice(pos, 1);
}

function showList()
{
    console.log("ToDo:");

    let finder = arr.filter(item => item.status == STATUS.TODO);
    finder.forEach(item => console.log("\t", item.action));

    console.log("In Progress: ");

    finder = arr.filter(item => item.status == STATUS.IN_PROGRESS);
    finder.forEach(item => console.log("\t", item.action));

    console.log("Done: ");

    finder = arr.filter(item => item.status == STATUS.DONE);
    finder.forEach(item => console.log("\t", item.action));

}

showList();