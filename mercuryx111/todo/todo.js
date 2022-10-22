const list = {
    "create a new practice task" : "In Progress",
    "make a bed" : "Done",
    "write a code" : "Todo"
};
function changeStatus (task, newStatus){
    list[task] = newStatus;
}
function addTask (newTask){
    list[newTask] = "Todo";
}
function deleteTask (delTask){
    delete list[delTask];
}
function showList() {
    console.log(`Todo:\n`)
    for (let key in list){
        if (list[key] == 'Todo'){
            console.log(`\t${key}`)
        }
    }
    console.log(`In Progress: \n`)
    for (let key in list){
        if (list[key] == 'In Progress'){
            console.log(`\t${key}`)
        }
    }
    console.log(`Done: \n`)
    for (let key in list){
        if (list[key] == 'Done'){
            console.log(`\t${key}`)
        }
    }
}
changeStatus("create a new practice task","Done");
addTask("drink coffee");
changeStatus("write a code", "Done");
deleteTask("make a bed");
showList();