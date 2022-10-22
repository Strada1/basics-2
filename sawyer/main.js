const list = {
    "create a new practice task":"In Progress",
    "make a bed":"Done",
    "write a post":"To Do",
    "Walking in park":"To Do"  
}

function changeStatus(Key, Value) {
    list[Key] = Value;
}

function addTask(Task) {
    list[Task] = "To Do";
}

function deleteTask(Task) {
    delete list[Task];
}

function showList() {

    console.log("ToDo:")

    for(key in list)
    {
        if(list[key] == "To Do")
            console.log("\t", key);       
    }

    console.log("\nIn Progress:")

    for(key in list)
    {
        if(list[key] == "In Progress")
            console.log("\t", key);       
    }

    console.log("\nDone:")

    for(key in list)
    {
        if(list[key] == "Done")
            console.log("\t", key);       
    }  
}

//s