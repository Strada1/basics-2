const TODO = "To Do";
const INPROGRESS = "In Progress";
const DONE = "Done";

const list = {
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "write a post":"To Do",
}

function changeStatus(task, status) {
    if (task in list) {
        list[task] = status;
    } else console.log(`can't change "${task}" to "${status}" cause there's no such task`);
}

function addTask(newTask) {
    list[newTask] = "To Do";
}

function deleteTask(task) {
    if (task in list) {
        delete list[task];
    } else console.log(`can't delete "${task}" cause it doesn't exist`)
}

function showList() {
    showCategory(TODO);
    showCategory(INPROGRESS);
    showCategory(DONE);
}

function showCategory(Category) {
    let str = "";
    console.log(`${Category}:`);
    for (let key in list) {
        if(list[key] === Category) {
            str+=`\t "${key}" \n`;
        } 
    }  if (!str) {
            console.log("\t-");
        } else {console.log(str)}
}

addTask("walk the dog");
addTask("feed the cat");
changeStatus("feed the cat", DONE)
deleteTask("make a bed");
deleteTask("feed the cat");
showList();