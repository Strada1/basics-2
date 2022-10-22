
const list = {
    "brush teeth": "Done",
    "have breakfast": "Done",
    "work": "In Progress",
    "create a new practice task": "To Do",
    "meet sister": "To Do",
};
function changeStatus (obj, task, status){
    obj[task] = status;
};

function addTask (obj, task){
    obj[task] = "To Do";
};

function deleteTast (obj, task) {
    delete obj[task]
};

function showList (obj) {
    console.log('To Do:');
    for (let key in obj){
        if (obj[key] == 'To Do') {
        console.log('     "' + key + '"' + ",");
        };
    };
    console.log('Done:');
    for (key in obj) {
        if (obj[key] == 'Done') {
            console.log('     "' + key + '"' + ",");
        };
    };
    console.log('In Progress:');
    for (key in obj) {
        if (obj[key] == 'In Progress') {
            console.log('     "' + key + '"' + ",");
        };
    };
};
changeStatus(list,"brush teeth", "In Progress");
changeStatus(list, "work","Done");
addTask(list, "visit grandma");
addTask(list, "watch film");
changeStatus(list, "watch film", "In Progress");
deleteTast(list, "work");
showList(list);


