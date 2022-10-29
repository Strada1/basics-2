const STATUS = {
    IN_PROGRESS: "In Progress",
    DONE: "Done",
    TO_DO: "To Do",
}

const PRIORITY = {
    LOW: "low",
    HIGH: "high",
}

const list = [];

function addTask(taskName) {
    for (let taskIndex = 0; taskIndex < list.length; taskIndex++) {
        if (list[taskIndex].name === taskName) {
            console.log(`Task "${taskName}" already exists into list!`);
            return;
        }
    }
    list.push({name: taskName, status: STATUS.TO_DO, priority: PRIORITY.LOW});
    console.log(`Task "${taskName}" added into list!`);   
}

function deleteTask(taskName) {
    for (let taskIndex = 0; taskIndex < list.length; taskIndex++) {
        if (list[taskIndex].name === taskName) {
            list.splice(taskIndex, 1);
            console.log(`Task "${taskName}" deleted`);
            return;
        }
    }
    console.log(`Task "${taskName}" not exist in list`); 
}

function changeStatus(taskName, taskStatus) {
    if (STATUS.IN_PROGRESS !== taskStatus && STATUS.DONE !== taskStatus && STATUS.TO_DO !== taskStatus) {
        console.log(`Wrong status of task "${taskName}"!`);
        return;
    } 
    let isNoTaskName = true;
    for (let taskIndex = 0; taskIndex < list.length; taskIndex++) {        
        if (list[taskIndex].name === taskName) {
            isNoTaskName = false;
            list[taskIndex].status = taskStatus;
            console.log(`For task "${taskName}" status successfully changed to "${taskStatus}!"`);
        }
    }
    if (isNoTaskName) console.log(`Task's name "${taskName}" not contains in list!`);
}

function changePriority(taskName, taskPriority) {
    if (PRIORITY.LOW !== taskPriority && PRIORITY.HIGH !== taskPriority) {
        console.log(`Wrong priority of task "${taskName}"!`);
        return;
    } 
    let isNoTaskName = true;
    for (let taskIndex = 0; taskIndex < list.length; taskIndex++) {        
        if (list[taskIndex].name === taskName) {
            isNoTaskName = false;
            list[taskIndex].priority = taskPriority;
            console.log(`For task "${taskName}" priority successfully changed to "${taskPriority}!"`);
        }
    }
    if (isNoTaskName) console.log(`Task's name "${taskName}" not contains in list!`);
}

function showList() {
    for (let st in STATUS) {
        console.log(STATUS[st] + ":")
        let emptyTasks = true;
        for (let taskIndex = 0; taskIndex < list.length; taskIndex++) {
            if (STATUS[st] === list[taskIndex].status) {
                emptyTasks = false;
                console.log(`\t"${list[taskIndex].name}" \tPriority: ${list[taskIndex].priority}`);
            }
        }
        if (emptyTasks) console.log("\t-");
    }
}

//---------------------------------------------
console.log("---------------");
addTask("create a new practice task");
addTask("make a bad");
addTask("write a post");
addTask('have a walk')
changeStatus('have a walk', "Done");
changeStatus('have a walk', "sdfsdff");
changePriority("make a bad", 'high');
changePriority("make a bad", 'hisdfsdfgh');
console.log("---------------");
showList();
console.log("---------------");
deleteTask('create a new practice task');
changeStatus("create a new practice task", "In Progress");
changeStatus("make a bad", "Done");
changeStatus("write a post", "To Do");
//console.log(list);
console.log("---------------");
showList();
console.log("---------------");