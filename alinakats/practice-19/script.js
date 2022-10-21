const list = {
    'create a new practice task': 'in progress',
    'make a bed': 'done',
    'make a dinner': 'to do',
    'go to swimming pool': 'to do',
    'read a new chapter in JS': 'to do',
    'clean a house': 'to do',
    'make html practice': 'in progress',

    


}
function changeStatus(task, status) {
    if (Object.keys(list).includes(task)) {
        return console.log(`Status for your task has change: ` + (list[task] = status));
    }
}

function addTask(task, status) {
    if (typeof list[task] === "undefined") {
        list[task] = status;
        return console.log(`You added a new task '${task}'`);
    }
}

function deleteTask(task) {
    if (typeof list[task] !== "undefined") {
        delete list[task];
        return console.log(`You deleted a task '${task}'`);
    }
    
}

function showList() {

}

changeStatus('make a dinner', 'in progress');
addTask('read a book', 'to do');
console.log(list);
deleteTask('make html practice');
console.log(list);