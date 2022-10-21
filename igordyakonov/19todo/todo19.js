const list = {
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
}

function changeStatus (property, value){
    list[property] = value;
}

function addTask (task, value = "To Do"){
    list[task] = value;
}

function deleteTask (task){
    delete list[task];
}

function showLost (){
    console.log("\040\040\040Todo:");
    for (let key in list){
        if (list[key] === "To Do"){
            console.log("\t" + key);
        } else{
            console.log("\t -");
            break;
        }
        
    }
    console.log("\040\040\040In Progress:");
    for (let key in list){
        if (list[key] === "In Progress"){
            console.log("\t" + key);
        } else{
            console.log("\t -");
            break;
        }
    }
    console.log("\040\040\040Done:");
    for (let key in list){
        if (list[key] === "Done"){
            console.log("\t" + key);
        } else{
            console.log("\t -");
            break;
        }
    }
}


changeStatus ("create a new practice task", "To Do");
changeStatus ("make a bed", "To Do");
changeStatus ("write a post", "In Progress");
addTask ("have a walk");
addTask("home work Strada", "Done");
deleteTask("have a walk");
showLost();
