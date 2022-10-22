const taskList = {
  "create a new practice task": "In Progress",
	"make a bed": "Done",
	"write a post": "To Do",
};
function addTask(task){
  taskList[task]='To Do';
}
function changeStatus(task, status){
  taskList[task]=status;
}
function deleteTask(task){
delete taskList[task];
}
function showList() {
    console.log(`Todo:\n`)
    for (let task in taskList){
        if (taskList[task] == 'To Do'){
            console.log(`\t${task}`)
        }
    }
    console.log(`In Progress: \n`)
    for (let task in taskList){
        if (taskList[task] == 'In Progress'){
            console.log(`\t${task}`)
        }
    }
    console.log(`Done: \n`)
    for (let task in taskList){
        if (taskList[task] == 'Done'){
            console.log(`\t${task}`)
        }
    }
}
addTask('go for a walk');
addTask('prepare breakfast');
addTask('feed your dog');
deleteTask('make a bed');
deleteTask('create a new practice task');
changeStatus('prepare breakfast','Done')
changeStatus('make a bed','Done')
changeStatus('feed your dog','In Progress')
showList();