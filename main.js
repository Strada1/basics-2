
const list = {
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
};

function changeStatus(task, meaning) {
    list[task] = meaning
    console.log(list)
};

function addTask(add) {
    list[add] = "To Do";
    console.log(list)
};


function deleteTask(del) {
    delete list[del];
    console.log(list)
};


function showList() {

    console.log("To Do:");
    for (let key in list) {
        if (list[key] == "To Do") {
            console.log(key);
        }
    }

    console.log("In Progress:");
    for (let key in list) {
        if (list[key] == "In Progress") {
            console.log(key);
        }
    }

    console.log("Done:");
    for (let key in list) {
        if (list[key] == "Done") {
            console.log(key);
        }
    }
}


addTask('have a walk');
changeStatus('have a walk', "Done");
addTask('brush your teeth');
deleteTask('brush your teeth');
showList();