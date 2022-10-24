const list = {
    "make a bed": "ToDo",
    "try to sleep": "ToDo",
    "dance with mom": "ToDo",
    "wake up": "ToDo",
    "make memes": "ToDo",
}

function addTask(task_name) {
    list[task_name] = `ToDo`;
}

function changeStatus(task, status) {
    list[task] = status;
}

function deleteTask(task) {
    delete list[task];
}

function showList(obj) {
    const sortedList = {
        ToDo: ``,
        "In progres": ``,
        Done: ``,
    };
    for (let objKey in obj) {
        if (obj[objKey] === `Done`) {
            sortedList.Done += `\t` + objKey + ` \n`;
        } else if (obj[objKey] === `ToDo`) {
            sortedList.ToDo += `\t` + objKey + ` \n`;
        } else if (obj[objKey] === `In progres`) {
            sortedList["In progres"] += `\t` + objKey + ` \n`;
        }
    }

    for (let a in sortedList) {
        if (sortedList[a] === ``) {
            sortedList[a] += `\t-\n`;
        }
    }

    return `ToDo:\n${sortedList.ToDo} In progres:\n${sortedList["In progres"]} Done:\n${sortedList.Done}`;

}



//TEST
addTask(`test`);
addTask(`test2`);
addTask(`test3`);
addTask(`test4`);
console.log(showList(list));
console.log();

changeStatus(`test2`, `Done`);
console.log(showList(list));
changeStatus(`test4`, `In progres`);
console.log(showList(list));

deleteTask(`test`);
console.log(showList(list));