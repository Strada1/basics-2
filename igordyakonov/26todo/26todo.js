const STATUS = {
    IN_PROGRESS: "In Progress",
    TO_DO: "To Do",
    DONE: "Done",
}

const PRIORITY = {
    LOW: "low",
    HIGH: "high"
}

const list = [
    {name:"create a post", status: STATUS.IN_PROGRESS, priority: PRIORITY.LOW},
    {name:"test", status: STATUS.DONE, priority: PRIORITY.HIGH}
]

function changeStatus (text, status){
    let findIndex = list.findIndex(item => item.name == text);
    if (findIndex != -1){
        list[findIndex].status=status;
    } else {
        console.log(`задача: ${text} не обнаружена, невозможно изменить СТАТУС на: ${status}`);
    }
    
}

function changePriority (text, priority){
    let findIndex = list.findIndex(item => item.name == text);
    if (findIndex != -1){
        list[findIndex].priority=priority;
    } else {
        console.log(`задача: ${text} не обнаружена, невозможно изменить ПРИОРИТЕТ на: ${priority}`)
    }

}

function addTask (text){
    list.push({name: text, status: STATUS.TO_DO, priority: PRIORITY.HIGH});
}

function deleteTask(task){
    let findIndex = list.findIndex(item => item.name == task);
    if (findIndex != -1){
        list.splice(findIndex, 1);
    } else {
        console.log(`задача: ${task} не обнаружена, невозможно УДАЛИТЬ: ${task}`)
    }

}

function showList(){
    let inProgress = "";
    let toDo = "";
    let done = "";
    for (let i = 0; i < list.length; i++) {
        if (list[i].status==STATUS.IN_PROGRESS){
            inProgress += "\t" + list[i].name + " \r\n";
        } else if (list[i].status == STATUS.DONE){
            done += "\t" + list[i].name + " \r\n";
        } else if (list[i].status == STATUS.TO_DO){
            toDo += "\t" + list[i].name + " \r\n";
        }
    }
    console.log("To Do:\r\n" + toDo + " \r" + "In Progress:\r\n" + inProgress + " \r" + "Done:\r\n" + done);
}


changeStatus ("create a post", STATUS.TO_DO);
changePriority ("create a post", PRIORITY.HIGH);
addTask("have a walk");
changeStatus ("have a walk", STATUS.IN_PROGRESS);
addTask("homework Strada");
changeStatus ("homework Strada", STATUS.DONE);
deleteTask("create a post");
showList()

