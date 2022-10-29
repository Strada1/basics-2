const status = {
    DONE: 'Done',
    TO_DO: 'To do', 
    IN_PROGRESS: 'In progress',
};

const priority = {
    HIGH: 'High',
    LOW: 'Low',
};

const errors = {
    errorAdd: 'You have not added any task in your list!',
};

const list = [ 
    { name: 'Create a post', status: status.IN_PROGRESS, priority: priority.LOW  }, 
    { name: 'Make the bed', status: status.TO_DO, priority: priority.LOW  },
    { name: 'Do homework', status: status.IN_PROGRESS, priority: priority.HIGH  }, 
    { name: 'Pet the cat', status: status.DONE, priority: priority.HIGH  }, 
    { name: 'Play the computer', status: status.DONE, priority: priority.LOW  },  
];


function addTask(item) {
    let newObj = {name: item, status: status.TO_DO, priority: priority.LOW};
    if(item === '') {
        console.log(errors.errorAdd);
    } else list.push(newObj);
};

function deleteTask(item) {
    let result = list.findIndex(function(res) {
        return res.name === item;
    });
    return list.splice(result, 1);
};

function changeStatus(item, changedStatus) {
    let result = list.find(function(res) {
        if(res.name === item) {
            return res.status = status[changedStatus];
        };
    })
    return result;
};

function changePriority(item, changedPriority) {
    let result = list.find(function(res) {
        if(res.name === item) {
            return res.priority = priority[changedPriority];
        };
    })
    console.log(result);
};

function showList() {
    let doneList = '';
    let toDoList = '';
    let inProgressList = '';
    console.log('Done:')
    let resultDone = list.forEach(function(item) {
        if(item.status === 'Done') {
            console.log(doneList = `\t${item.name}\n \t${item.priority}\n`);
        }
    })
    console.log('To do:')
    let resultToDo = list.forEach(function(item) {
        if(item.status === 'To do') {
            console.log(toDoList = `\t${item.name}\n \t${item.priority}\n`);
        }
    })
    console.log('In progress:')
    let resultInProgress = list.forEach(function(item) {
        if(item.status === 'In progress') {
            console.log(inProgressList = `\t${item.name}\n \t${item.priority}\n`);
        }
    })
};
addTask('');
addTask('Do hair');
changeStatus('Make the bed', 'DONE');
deleteTask('test');
changeStatus('make the bed', 'IN_PROGRESS');
changePriority('make the', 'HIGH');
console.log(list);
showList();
