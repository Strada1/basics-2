const TODO = 'To Do';
const DONE = 'Done';
const INPROGRESS = 'In Progress';
const  list = {
    "create a new practice task": "In Progress",
	"make a bed": "Done",
	"write a post": "To Do",
}

function changeStatus(task, status){
    if(task in list)
    list[task] = status;
}

function addTask(task){
    list[task] = TODO;
}

function deleteTask(task){
    if(task in list)
        delete list[task]
}

function showList(){
    console.log(createShowList(TODO));
    console.log(createShowList(INPROGRESS));
    console.log(createShowList(DONE));
}

function createShowList(status){
    let result = `${status}:`;
    let count = 0;
    for(key in list){
        if(list[key] == status){
            result += `\n\t "${key}"`;
            count++;
        }
    }
    if(count === 0) result += `\n\t-`;
    return result;
}
addTask('пора спать');
changeStatus('пора спать', INPROGRESS);
showList();