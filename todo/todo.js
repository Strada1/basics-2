const EMPTY = '-';
const STATUS = {
    TODO: "To Do",
    DONE: "Done",
    IN_PROGRESS: "In progress",
}

const PRIORITY = {
    LOW: 'low',
    HIGH: 'high',
}

const list = [ { name: 'create a post', status: "In progress", priority: 'low'  }, 
               { name: 'test', status: "Done", priority: 'high'  },
               { name: 'test2', status: "To Do", priority: 'high'  },
               { name: 'test3', status: "Done", priority: 'high'  },];

const addTask = (todoList, task) =>{
    if(!isTask(todoList, task)){
        todoList.push({
            name: task,
            status: STATUS.TODO,
            priority: PRIORITY.LOW,
            });
    }
}

const changeStatus = (todoList, task, status) => {
    if(isTask(todoList, task) && isStatus(status)){
        let index = findTask(todoList, task);
        todoList[index].status = status;
    }
}

const changePriority = (todoList, task, priority) => {
    if(isTask(todoList, task) && isPriority(priority)){
        let index = findTask(todoList, task);
        todoList[index].priority = priority;
    }
}

const deleteTask = (todoList, task) =>{
    if(isTask(todoList, task)){
        let index = findTask(todoList, task);
        todoList.splice(index, 1);
    } 
}

const showList = (todoList) =>{
    let resultString = '';
    for(let status in STATUS){
        resultString += `\n${STATUS[status]}:`;
        resultString += todoList.reduce((sum, current) => sum +
            (current.status === STATUS[status] ? 
            `\n\t"${current.name}",` : ''),'');
        if(resultString[resultString.length-1] === ':') 
            resultString += `\n\t${EMPTY}`;
    }
    console.log(resultString.trim());
}

const isTask = (todoList, task) =>
    todoList.some(item => item.name === task);

const isStatus = (status) =>
    Object.values(STATUS).includes(status);

const isPriority = (priority) =>
    Object.values(PRIORITY).includes(priority);

const findTask = (todoList, task) =>
    todoList.findIndex(item => item.name === task);

addTask(list, 'create dsa post');
changeStatus(list, 'test', STATUS.TODO);
changePriority(list, 'create a post', PRIORITY.HIGH);
deleteTask(list, 'create dsa post');
showList(list);