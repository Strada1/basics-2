const list = [];

function addTask(name, status, priority){
    let object = {
        name,
        status,
        priority,
    };
    list.push(object);
};

function deleteTask(findName){
    let taskIndex = list.findIndex(item => item.name == findName);
    list.splice(taskIndex, 1);
};

function showTask(){
    console.log("ToDo");
    console.log(list.filter(item => item.status == "todo"));

    console.log("In progress");
    console.log(list.filter(item => item.status == "in progress"));

    console.log("Done");
    console.log(list.filter(item => item.status == "done"));
};

addTask("go to eat", "done", "high");
addTask("go to sleep", "done", "high");
addTask("watch a movie", "in progress", "medium");
addTask("go to eat again", "in progress", "high");
addTask("go to shower", "done", "low");
addTask("go to study", "in progress", "low");

deleteTask("go to eat");
deleteTask("go to study");

showTask();
