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
const isTask = (task) =>
    list.reduce((result, current) => result || current.name === task, false);

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

const addTask = (task) =>{
    if(!isTask(task)){
        list.push({
            name: task,
            status: STATUS.TODO,
            priority: PRIORITY.LOW,
            });
    }
}

const changeStatus = (task, status) => {
    if(isTask(task) && isStatus(status)){
        list.forEach(item => {
            if(item.name === task) item.status = status;
        });
    }
}

const changePriority = (task, priority) => {
    if(isTask(task) && isPriority(priority)){
        list.map(item => {
            if(item.name === task) item.priority = priority;
        });
    }
}

const deleteTask = (task) =>{
    if(isTask){
        for(let i = list.length - 1; i > 0; i--){
            if(list[i].name === task) list.splice(i, 1);
        }
    } 
}

const showList = (todoList) =>{
    const statusList = createArray();
    pushArray(statusList, todoList);
    for(let status in STATUS){
        console.log(`${STATUS[status]}:\n\t${statusList[STATUS[status]].length === 0 ? 
            EMPTY : statusList[STATUS[status]].join('\n\t')}`);
    }
}

const createArray = () =>{
    let result = {};
    for(let key in STATUS){
        result[STATUS[key]] = [];
    }
    return result;
}

const pushArray = (arr, todoList) => {
       todoList.forEach(item => {
           arr[item.status].push(`"${item.name}",`);
       });
}
                        
addTask('create dsa post');
changeStatus('test', STATUS.TODO);
changePriority('create a post', PRIORITY.HIGH);
deleteTask('create dsa post');
showList(list);