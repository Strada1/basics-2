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
               { name: 'test3', status: "Done", priority: 'high'  },
               { name: 'test4', status: "Done", priority: 'high'  },];

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
        todoList.forEach(item => {
            if(item.name === task) item.status = status;
        });
    }
}

const changePriority = (todoList, task, priority) => {
    if(isTask(todoList, task) && isPriority(priority)){
        todoList.map(item => {
            if(item.name === task) item.priority = priority;
        });
    }
}

const deleteTask = (todoList, task) =>{
    if(isTask(todoList, task)){
        for(let i = todoList.length - 1; i > 0; i--){
            if(todoList[i].name === task) todoList.splice(i, 1);
        }
    } 
}

const showList = (todoList) =>{
    let resultString = '';
    for(let status in STATUS){
        resultString += `\n${status}:`;
        resultString += todoList.reduce((sum, current) => sum +
            (current.status === STATUS[status] ? 
            `\n\t"${current.name}",` : ''),'');
        if(resultString[resultString.length-1] === ':') resultString += `\n\t${EMPTY}`;
    }
    console.log(resultString.trim());
}

const isTask = (todoList, task) =>
    todoList.reduce((result, current) => result || current.name === task, false);

const isStatus = (status) =>{
    let result = false;
    for(key in STATUS)
        if(STATUS[key] === status)
            result = true;
    return result;
}

const isPriority = (priority) =>{
    let result = false;
    for(key in PRIORITY)
        if(PRIORITY[key] === priority)
            result = true;
    return result;
}

addTask(list, 'create dsa post');
changeStatus(list, 'test', STATUS.TODO);
changePriority(list, 'create a post', PRIORITY.HIGH);
deleteTask(list, 'create dsa post');
showList(list);