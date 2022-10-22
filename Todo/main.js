const list = {};
let checkDone = 0;
let checkInProgress = 0;
let checkToDo = 0;


function changeStatus( task, status ="Done") {
    list[task]= status;
}

function addTask( task ) {
    list[task] = "ToDo";
}

function deleteTask( task ) {
    delete list[task];
}

function showList() {
    console.log("ToDo:");
    for (let task in list) {
        if (list[task] == "ToDo") {
        checkToDo+=1;
        console.log( '"' + task + '"' );
        }
    }
    if (checkToDo == 0) {
        console.log("-");
    }
    console.log("In Progress:");
    for (let task in list) {
        if (list[task] == "In Progress") {
        checkInProgress+=1;
        console.log( '"' + task + '"' );
        }
    }
    if (checkInProgress == 0) {
        console.log("-");
    }
    console.log("Done:");
    for (let task in list) {
        if (list[task] == "Done") {
        checkDone+=1;
        console.log( '"' + task + '"' );
        }
    }
    if (checkDone == 0) {
        console.log("-");
    }
}

addTask("make a tost");
deleteTask("make a tost");
addTask("take a tost");
addTask("brake a tost");
addTask("abort a tost");
changeStatus("brake a tost", "In Progress");
showList();

