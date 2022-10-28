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

console.log(list);
addTask('new task');
addStatus('new task', STATUS.TODO);
addPriority('new task', PRIORITY.MEDIUM);
addTask('your mori');
deleteTask('test');
deleteTask('qwerty');
console.log(list);


