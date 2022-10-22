const list = {
}

function addTask(task) {
    list[task] = "To Do";
}

function deleteTask(task) {
    delete list[task];
}

function letsGo(task) {
    for (let key in list) {
            if (key == task) {
                list[key] = "In progress";
            }
    }
}

function changeStatus(task) {
        list[task] = "Done"
}

function showList() {
    console.log("To Do :")
    for (let key in list) {
        if (list[key] == "To Do") {
            console.log([key])
        }
    }
    console.log("In progress :")
    for (let key in list) {
        if (list[key] == "In progress") {
            console.log([key])
        }
    }
    console.log("Done :")
    for (let key in list) {
        if (list[key] == "Done") {
            console.log([key])
        }
    }
}

addTask("write a post");
addTask("make a bed");
addTask("die in strada");
addTask("some task");
letsGo("die in strada");
changeStatus("some task");
deleteTask("make a bed");
showList();