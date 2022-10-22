const list = {}

function addTask(taskName){
    list[taskName] = 'To Do';
}

function changeStatus(taskName,taskStatus){
    list[taskName] ? list[taskName] = taskStatus : null;
}

function deleteTask(taskName){
    delete list[taskName];
}

function showList(){
    let toDo = '';
    let inProgress ='';
    let done = '';

    for(let key in list){
        switch(list[key]){
            case 'To Do': 
                toDo += '\t' + key + '\n';
                break;
            case 'In Progress': 
                inProgress += '\t' + key + '\n';
                break;
            case 'Done': 
                done += '\t' + key + '\n';
                break;
        }
    }
    return `ToDo:\n${toDo||'\t-\n'}In Progress:\n${inProgress||'\t-\n'}Done:\n${done||'\t-\n'}`
}

addTask('sleep');
addTask('work')
changeStatus('work','Done')


console.log(showList())
