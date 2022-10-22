const list = {
	"create a new practice task": "In Progress",
	"make a bed": "Done",
	"write a post": "To Do",
};

function changeStatus(key, status) {
    list[key] = status;
}

function addTask(key) {
    list[key] = "To Do";
}

function deleteTask(key) {
    delete list[key];
}

function showList() {

    console.log("Done:");
    for (key in list) {
        if(list[key] === "Done") {
            console.log(`'${key}'`);
        }
    }

    console.log("To Do:");
    for(key in list) {
        if(list[key] === "To Do") {
            console.log(`'${key}'`);
        }
}

    console.log("In Progress:");
    for (key in list) {
        if(list[key] === "In Progress") {
            console.log(`'${key}'`)
        }
    }
}

addTask('Kill people');
showList();