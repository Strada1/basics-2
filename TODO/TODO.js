const TO_DO = "To Do";
const DONE = "Done";
const IN_PROGRESS = "In Progress";

const list = {
    "create a new practice task": IN_PROGRESS,
    "make a bed": DONE,
    "write a post": TO_DO,
    "do TODO list": TO_DO,
}

function changeStatus(task,status){

}

function deleteTask(deleteTask){
    delete list[deleteTask];
}

function addTask(addTask){

}

function showList(){
    console.log(list);
}

deleteTask('make a bed');
showList();
