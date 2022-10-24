const list = {
    "make a bed": "Done",
    "make a beds": "Done",
    "make a bedf": "Done",
    "make a bedg": "Done",
    "make a bedh": "Done",
}

function addTask(task_name) {
    return list[task_name] = `ToDo`;
}

function changeStatus(task, status) {
    // return list[task] = status;
}

function showList(obj) {
    const sort = {
        Done: ``,


    };
    for (let objKey in obj) {
        if (obj[objKey] === `Done`) {
            sort.Done += `\t` + objKey + ` \n`;
        }
    }
    return `Done:\n${sort.Done}`;

}

addTask(`test`);
addTask(`test2`);
addTask(`test3`);
addTask(`test4`);
console.log(showList(list));
console.log();

// console.log(changeStatus(`test2`, `Done`));
// console.log(changeStatus(`test4`, `In progres`));
// console.log(showList(list));

// console.log(deleteTask(`test`));
// console.log(showList());