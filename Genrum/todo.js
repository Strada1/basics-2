const STATUS = {
    TODO: "To Do",
    INPROGRESS: "In Progress",
    DONE: "Done",
}

const PRIORITY = {
    HIGH: "high",
    LOW: "low",
}

const list = [
    {name: "write a post", status: "In Progress", priority: "low",}, 
    {name: "test", status: "Done", priority: "high",},
]

function changeStatus(task, newStatus) {
   if (list.find(item => item.name == task) === undefined) {
    console.log(`can't change "${task}" to "${newStatus}" cause there's no such task`);
   } else {
    list.find(item => item.name == task).status = newStatus;
   }
}

function addTask(name, priority) {
    list.push({name, status: STATUS.TODO, priority});
}

function deleteTask(task) {
    let deleteIndex = list.findIndex(item => item.name == task);
    if (deleteIndex < 0) {
        console.log(`can't delete "${task}" cause it doesn't exist`)
    } else {
        list.splice(deleteIndex, 1)
    }
}


function showCategory(cat) {
    str="";
    console.log(`${cat}:`);
    list.forEach(function(item) {
        if (item.status === cat){
            str+="\t" + item.name +"\n";
        }
    }) 
    if (!str) {
        console.log("\t-");
    } else {console.log(str)}
}


function showList() {
    showCategory(STATUS.TODO)
    showCategory(STATUS.INPROGRESS)
    showCategory(STATUS.DONE)
}

addTask("walk the dragon", "high");
changeStatus("walk the dragon", STATUS.INPROGRESS);
addTask("make pancakes", PRIORITY.LOW);
addTask("feed the cat", PRIORITY.HIGH);
changeStatus("feed the cat", STATUS.DONE);
deleteTask("make a bed");
deleteTask("feed the cat");
showList(); 