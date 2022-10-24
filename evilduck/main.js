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
    let flag = false;
    for (let key in list) {
        if (list[key] === toDo) {
            flag = true;
            console.log("   ", key)
        }
    }
    if (!flag) {
        console.log("-");
      }

    console.log("   ");
    console.log("IN PROGRESS:");
    let flag2 = false;
    for (let key in list) {
        if (list[key] === inProgress) {
            flag2 = true;
            console.log("   ", key)
        }

    }
    if (!flag2) {
        console.log("-");
      }

    console.log("   ");
    console.log("DONE:");
    let flag3 = false;
    for (let key in list) {
        if (list[key] === done) {
            flag3 = true;
            console.log("   ", key)
        }

    }
    if (!flag3) {
        console.log("-");
      }

 }

addTask("выгулять собаку");
addTask("загрузить задачу в гит")
changeStatus("сделать задачу в Strada", done);
showList();