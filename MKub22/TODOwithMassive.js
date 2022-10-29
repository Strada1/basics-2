"use strict"
const statuses = {
    TODO : 'To Do:',
    DONE : 'Done:',
    INPR : 'In Progress:',
}
const priorities = {
    HIGH : 'High',
    MEDIUM : "Medium",
    LOW : 'Low',
}
// const list = {
// 	"create a new practice task": "In Progress:",
// 	"make a bed": "Done:",
// 	"write a post": "To Do:",
// };

const list = [
    {name: 'make a bed', status: 'Done:', priority: "Low"},
    {name: 'write a post', status: 'To Do:', priority: "Medium"},
    {name: 'create a task', status: 'In progress:', priority: "High"},
]

let keys = {
    item1:"",
    item2:"",
    item3:"",

}

function changeStatus(task, newStatus) {
    if (list.find(item => item.name == task) === undefined) {
     console.log(`can't change "${task}" to "${newStatus}" cause there's no such task`);
    } else {
     list.find(item => item.name == task).status = newStatus;
    }
 }

function deleteTask(name){
    let obj = list.map(x => {
        return x.name;
    }).indexOf(name);
    list.splice(obj, 1);
}
function addTask(newTask, prior){
    newTask ={
        name : newTask,
        status: 'To Do:',
        priority: prior,
    }
    if(!newTask) {
        console.log('Введите задачу');
    }
    // list[newTask.status] = 'To Do:';
    list.splice(4, 0, newTask);
}

function showCategory(cat) {
    let str="";
    console.log(`${cat}`);
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
    showCategory(statuses.TODO)
    showCategory(statuses.INPR)
    showCategory(statuses.DONE)
}


deleteTask('make a bed');
addTask('catch sone', priorities.MEDIUM);
changeStatus('write a post', 'Done:');
changeStatus('catch sone', 'Done:');
addTask('make a shower', priorities.HIGH);
addTask('create smth', priorities.LOW);
changeStatus('create smth', 'In Progress:');
deleteTask('create smth');
showList();