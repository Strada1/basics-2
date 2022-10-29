"use strict"
const STATUS = {
    TODO : 'To Do:',
    DONE : 'Done:',
    INPR : 'In Progress:',
}
const PRIORITY = {
    HIGH : 'High',
    MEDIUM : "Medium",
    LOW : 'Low',
}

const list = [
    {name: 'make a bed', status: 'Done:', priority: "Low"},
    {name: 'write a post', status: 'To Do:', priority: "Medium"},
    {name: 'create a task', status: 'In progress:', priority: "High"},
]

// let keys = {
//     item1:"",
//     item2:"",
//     item3:"",

// }
function changeStatus(task, newStatus) {
    if (list.find(item => item.name == task) === undefined) {
     console.log(`can't change "${task}" to "${newStatus}" cause there's no such task`);
    } 
    list.find(item => item.name == task).status = newStatus;
    
 }

function deleteTask(name){
    if(list.find(item => item.name == name) === undefined){
        console.log('Error');
    }
    if(list.find(item => item.name == name) === false){
        console.log('Error');
    }
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
    if(!newTask || !prior) {
        console.log('Введите задачу');
    }
    list.push(newTask);
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
    showCategory(STATUS.TODO)
    showCategory(STATUS.INPR)
    showCategory(STATUS.DONE)
}


deleteTask('make a bed');
addTask('catch sone', PRIORITY.MEDIUM);
changeStatus('write a post', 'Done:');
changeStatus('catch sone', 'Done:');
addTask('make a shower', PRIORITY.HIGH);
addTask('create smth', PRIORITY.LOW);
changeStatus('create smth', 'In Progress:');
deleteTask('create smth');
showList();