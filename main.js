const list = [
    { name: 'create a post', status: 'In progress', priority: 'low' },
    { name: 'do homework', status: 'To Do', priority: 'high' }
];

const STATUS = {
    TODO: "To Do",
    DONE: "Done",
    IN_PROGRESS: "In progress",
}

function addTask(task, priority) {
    list.push({ name: task, status: STATUS.TODO, priority: priority })
}

function deleteTask(task) {
    let itemDeleteIndex = list.findIndex(item => item.name == task)
    if (itemDeleteIndex !== -1) {
        list.splice(itemDeleteIndex, 1);
    } else return "Wrong task name"
}

function changeStatus(task) {
    let statusChangeIndex = list.findIndex(item => item.name == task)
    if (statusChangeIndex !== -1) {
        list[statusChangeIndex].status = STATUS.DONE;
    } else return "Wrong task name"
}

function showList() {
    console.log("To Do: ");
    let todoList = list.forEach(element => {
        if (element.status == STATUS.TODO) {
            console.log(`\t\'${element.name}\` status = \`${element.status}\` priority = \`${element.priority}\``);
        }
    });
    console.log("In progress: ");
    let inprogressList = list.forEach(element => {
        if (element.status == STATUS.IN_PROGRESS) {
            console.log(`\t\'${element.name}\` status = \`${element.status}\` priority = \`${element.priority}\``);
        }
    });
    console.log("Done: ");
    let doneList = list.forEach(element => {
        if (element.status == STATUS.DONE) {
            console.log(`\t\'${element.name}\` status = \`${element.status}\` priority = \`${element.priority}\``);
        }
    });
}
addTask("some work", "low");
addTask("learn JS", "high");
deleteTask("some work");
changeStatus("do homework")
showList();