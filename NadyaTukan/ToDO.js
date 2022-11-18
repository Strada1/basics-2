const InProgress = "In progress";
const Done = "Done";
const ToDo = "To Do";

// const list = {
//     "create a new practice task": InProgress,
//     "make a bed": Done,
//     "write a post": ToDo,
// }
const list = [{ name: 'create a post', status: 'In progress', priority: 'low' },
    { name: 'test', status: 'Done', priority: 'high' }
];


function changeStutus(toDo, Status) {
    list.splice(list.findIndex(item => (item.name == toDo)), 1, { name: toDo, status: Status, priority: 'low' });
}


function addTask(toDo) {
    list.push({ name: toDo, status: ToDo, priority: 'low' });
}



function deleteTask(toDo) {
    list.splice(list.findIndex(item => (item.name == toDo)), 1);

}



function showList() {
    let flag = false;
    console.log("To Do:");
    list.forEach(item => {
        if (item.status == ToDo) {
            console.log('\t' + item.name);
            flag = true;
        }
    });

    if (!flag) {
        console.log('\t-');
    }
    console.log("In Progress:");
    list.forEach(item => {
        if (item.status == InProgress) {
            console.log('\t' + item.name);
            flag = true;
        }
    });
    for (const key in list) {

    }
    if (!flag) {
        console.log('\t-');
    } else {
        flag = false;
    }
    console.log("Done:");
    list.forEach(item => {
        if (item.status == Done) {
            console.log('\t' + item.name);
            flag = true;
        }
    });
    if (!flag) {
        console.log('\t-');
    }
}

addTask('help');
changeStutus('help', 'Done');
showList();