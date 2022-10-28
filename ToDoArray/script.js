const STATUS = {                        // ВАЖНО
    INPROGRESS: 'In progress',          // Тамила спасибо за стикеры
    DONE: 'Done',
    TODO: 'To do',
}

const PRIORITY = {
    LOW: 'low',
    MEDIUM: 'medium',
    HIGH: 'high',
}

const list = [
    { name: 'create a post', status: 'In progress', priority: 'low'  },
    { name: 'test', status: 'Done', priority: 'high'  }
];

function addTask(task){
    list.push({name: task, status: '-', priority: '-'});
}

function deleteTask(task){
    if (list.find(item => item.name === task)){
        let index = list.indexOf(list.find(item => item.name === task));
        list.splice(index, 1);
    }else{
        console.log('Ты дурак вводи имя таски правильно');
    }
}

function addStatus(task, status){
    if (list.find(item => item.name === task)){
        let index = list.indexOf(list.find(item => item.name === task));
        list[index].status = status;
    }else{
        console.log('Ты дурак вводи имя таски правильно');
    }
}

function addPriority(task, priority){
    if (list.find(item => item.name === task)){
        let index = list.indexOf(list.find(item => item.name === task));
        list[index].priority = priority;
    }else{
        console.log('Ты дурак вводи имя таски правильно');
    }
}

function showList(){
    let toDo = STATUS.TODO+':';
    let inProgress = STATUS.INPROGRESS+':';
    let done = STATUS.DONE+':';
    let finalStr = '';
    for (let key of list) {
        if (key.status === STATUS.TODO){
            toDo += `\n\tTask: ${key.name}. Priority: ${key.priority}`;
        }else if(key.status === STATUS.INPROGRESS){
            inProgress += `\n\tTask: ${key.name}. Priority: ${key.priority}`;
        }else if(key.status === STATUS.DONE){
            done += `\n\tTask: ${key.name}. Priority: ${key.priority}`;
        }
    }
    finalStr += toDo+'\n'+inProgress+'\n'+done;
    console.log(finalStr);
}

console.log(list);
addTask('new task');
addStatus('new task', STATUS.TODO);
addPriority('new task', PRIORITY.MEDIUM);
addTask('your mori');
//deleteTask('test');
//deleteTask('qwerty');
addStatus('your mori', STATUS.DONE);
console.log(list);
showList();

