const inProgress = "In Progress";
const done = "Done";
const toDo = "To Do";

const list = {
    
	"сделать задачу в Strada": inProgress,
	"заправить кровать": done,
	"написать пост в тг": toDo,
}

function changeStatus(task, status) {
    list[task] = status;
}

function deleteTask(task) {
    delete list[task];
}

function addTask(task) {
   list[task] = toDo;
}

function showList() {
    console.log("TO DO:");
    for (let key in list) {
        if (list[key] === toDo) {
            console.log("   ", key)
        }
    }
    console.log("   ");
    console.log("IN PROGRESS:");
    for (let key in list) {
        if (list[key] === inProgress) {
            console.log("   ", key)
        }
    }
    console.log("   ");
    console.log("DONE:");
    for (let key in list) {
        if (list[key] === done) {
            console.log("   ", key)
        }
    } 

 }

addTask("выгулять собаку");
addTask("загрузить задачу в гит")
changeStatus("сделать задачу в Strada", done);
showList();