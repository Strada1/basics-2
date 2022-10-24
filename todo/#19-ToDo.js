const list = {}

function addTask(task_name) {
    return list[task_name] = `ToDo`;
}

function changeStatus(task, status) {
    return list[task] = status;
}

function showList(obj) {
    for (let key in obj) {
        console.log(key);
    }
}

addTask(`test`);
addTask(`test2`);
addTask(`test3`);
addTask(`test4`);
console.log(showList(list));

// console.log(changeStatus(`test2`, `Done`));
// console.log(changeStatus(`test4`, `In progres`));
// console.log(showList(list));

// console.log(deleteTask(`test`));
// console.log(showList());