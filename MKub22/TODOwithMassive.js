"use strict"

const statuses = {
    TODO : 'To Do:',
    DONE : 'Done:',
    INPR : 'In Progress:',
}
const priorities = {
    HIGH : 'High',
    LOW : 'Low',
}
const list = [

];
let subTask = document.getElementById('sub');
let subLowTask = document.getElementById('sub2');
let inpTask = document.getElementById('inpTask');
let inpLowTask = document.getElementById('inpLowTask');
let impTask = document.getElementById('impTasks')
let lowTask = document.getElementById('lowTasks');


subTask.addEventListener('click', function(){
   
    event.preventDefault();
    
    addTask(inpTask.value,priorities.HIGH);
    render();
    console.log(list)
})

    
    
subLowTask.addEventListener('click', function(){
    event.preventDefault();

    addTask(inpLowTask.value,priorities.LOW);
    render();    
    console.log(list);
})


function render(){
    impTask.textContent="";
    lowTask.textContent="";

    for (let item of list) {
	if (item.priority == priorities.HIGH) {
		addHigh(item.name);
	} else if (item.priority == priorities.LOW) {
		addLow(item.name);
	}
}

}
function addHigh(task){

    let div = document.createElement('div');
   
    let elemLabel = document.createElement('label');
    elemLabel.className = 'task';
    
    let elemCheck = document.createElement('check');
    elemCheck.className = 'check';
    
    let checkBox = document.createElement('input');
    checkBox.className = 'rtg';
    checkBox.type = 'checkbox'
    
    let close = document.createElement('pop_up_close');
    close.className = 'pop_up_close';
    close.innerHTML = '&#10006';
    
    let elemText = document.createElement('text');
    elemText.className = 'text';
    
    div.className = 'tasks';
    
    elemText.textContent = task;
  
    elemLabel.append(checkBox);
    elemLabel.append(elemCheck);
    elemLabel.append(elemText);
    div.append(close);
    div.append(elemLabel);
    
    impTask.append(div);


    close.addEventListener('click', function(){
        deleteTask(task);
        render();
    })
    checkBox.addEventListener('click', function(){
        if(this.checked){
                changeStatus(task, statuses.DONE);
            }
            else if(!this.checked){
                changeStatus(task, statuses.TODO);
                render();
                console.log('gg');
            }
        
    })     
    
}

function addLow(task){

    let div = document.createElement('div');
   
    let elemLabel = document.createElement('label');
    elemLabel.className = 'task';
    
    let elemCheck = document.createElement('check');
    elemCheck.className = 'check';
    
    let checkBox = document.createElement('input');
    checkBox.className = 'rtg';
    checkBox.type = 'checkbox'
    
    let close = document.createElement('pop_up_close');
    close.className = 'pop_up_close';
    close.innerHTML = '&#10006';
    
    let elemText = document.createElement('text');
    elemText.className = 'text';
    
    div.className = 'tasks';
    
    elemText.textContent = task;
  
    elemLabel.append(checkBox);
    elemLabel.append(elemCheck);
    elemLabel.append(elemText);
    div.append(close);
    div.append(elemLabel);
    
    lowTask.append(div);

close.addEventListener('click', function(){
    deleteTask(task);
    render();
})
checkBox.addEventListener('click', function(){
    if(this.checked){
                changeStatus(this.parentNode.childNodes[2].textContent, statuses.DONE);
            }
        else if(!this.checked){
            changeStatus(this.parentNode.childNodes[2].textContent, statuses.TODO);
            console.log('gg');
        }
})      
    
}

function changeStatus(elemText, newStatus) {
    if (list.find(item => item.name == elemText) === undefined) {
        console.log(`can't change "${elemText}" to "${newStatus}" cause there's no such task`);
    } else {
        list.find(item => item.name == elemText).status = newStatus;
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
    list.push(newTask);
}

// let keys = {
//     item1:"",
//     item2:"",
//     item3:"",

// }
// function showCategory(cat) {
//     let str="";
//     console.log(`${cat}`);
//     list.forEach(function(item) {
//         if (item.status === cat){
//             str+="\t" + item.name +"\n";
//         }
//     }) 
//     if (!str) {
//         console.log("\t-");
//     } else {console.log(str)}
// }
// function showList() {
//     showCategory(statuses.TODO)
//     showCategory(statuses.INPR)
//     showCategory(statuses.DONE)
// }



