const inProgress = "In Progress";
const done = "Done";
const toDo = "To Do";

const list = {
    "create a new practice task": inProgress,
    "make a bed": done,
    "write a post": toDo,
}

function changeStatus(task, status){
    list[task] = status;
}

function addTask(task){
    list[task] = toDo;
}

function deleteTask(task){
    delete list[task];
}

function showList(){
    let toDo1 = '';
    let done1 = '';
    let inProgress1 = '';
    for (let key in list){
        if (list[key] === toDo){
            toDo1 += `\n\t${key}`;
        }else if (list[key] === inProgress){
            inProgress1 += `\n\t${key}`;
        }else if (list[key] === done){
            done1 += `\n\t${key}`;
        }
    }
    if (toDo1 === ''){
        toDo1 += '\n\t-';
    }
    if (inProgress1 === ''){
        inProgress1 += '\n\t-';
    }
    if (done1 === ''){
        done1 += '\n\t-';
    }
    console.log(`To do:\t${toDo1}`);
    console.log(`In progress:\t${inProgress1}`);
    console.log(`Done:\t${done1}`);
    console.log("-----------------------------------------");
}

showList();
changeStatus("write a post", done);
addTask("new task");
changeStatus("new task", done);
deleteTask("make a bed");

// deleteTask("write a post");
// deleteTask("new task");
showList();