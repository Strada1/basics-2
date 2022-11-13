const STATUS = {
    Todo: 'Todo',
    InProgress: 'In Progress',
    Done: 'Done',
}

const list = {
'create a new task' : STATUS.Todo,
'make a bed' : STATUS.Todo,
'write a pos' : STATUS.Todo,
}

function changeStatus (task, newStatus) {
    for (let key in list) {
        if (key == task) {
            list[task] = newStatus;
            //console.log(list.key);
        } 
    }
}

function addTask (newTask, statusOfNewTask) {
    list[newTask] = statusOfNewTask;
    //console.log (list);
}

function deleteTask (delTask) {
    delete list[delTask];
}

    function findStatus (neededStatus) {
        let checkValue = 0;
        for (let key in list) {
            if (list[key] == neededStatus ){
                checkValue += 1;
                console.log('    ' + key + ',');
            }}
        if (checkValue == 0) {
            console.log("   -");
        }
        

    }

function showList () {
    console.log(STATUS.Todo + ":");
    findStatus('Todo');
    
    console.log(STATUS.InProgress + ':');
    findStatus('In progress');
    
    console.log (STATUS.Done + ':');
    findStatus('Done');
     
}
changeStatus('create a new task', 'Todo');
addTask('Make a coffee', 'In progress');
addTask('Make a dinner', 'Todo');
deleteTask('make a bed');
console.log(list);
showList();
//console.log(list);