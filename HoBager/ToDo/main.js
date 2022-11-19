const lowPriorityForm = document.querySelector('.lowPriority__add');
const highPriorityForm = document.querySelector('.highPriority__add');
const taskRemoveButtons = document.querySelectorAll('.task__remove');
const allStartTask = document.querySelectorAll('.task');
let toDo = [];

const priorityList = {
    LOW : 'lowPriority',
    HIGH: 'highPriority',
};

const statusList = {
    TODO: 'ToDo',
    DONE: 'Done',
}

let taskNum = 5;



highPriorityForm.addEventListener('submit',function(event){
    event.preventDefault();
    let formInput = this.firstElementChild;
    let taskName = formInput.value;
    if(taskName){
        addTask(taskName,priorityList.HIGH);
        formInput.value = '';
        render();
    }
});

lowPriorityForm.addEventListener('submit',function(event){
    event.preventDefault();
    let formInput = this.firstElementChild;
    let taskName = formInput.value;
    if(taskName){
        addTask(taskName,priorityList.LOW);
        formInput.value = '';
        render();
    }
});

function createTaskNode(task){
    const taskNode = document.createElement('div');
    const taskInput = document.createElement('input');
    const taskName = document.createElement('div');
    const taskRemove = document.createElement('div');

    taskNode.className = task.priority + '__task task ' + task.status;
    
    taskInput.className = 'radio';
    taskInput.setAttribute('type','checkbox');
    taskInput.checked = task.status === 'Done';

    taskName.className = 'task__text';
    taskName.textContent = task.name;

    taskRemove.className = 'task__remove';
    taskRemove.textContent = '+';
    taskRemove.addEventListener('click',removeTask);

    taskNode.append(taskInput,taskName,taskRemove);

    taskNode.addEventListener('click',changeStatus);

    return taskNode
}

function addTask(taskName,taskPriority){
    if(!(toDo.find((task) => task.name === taskName))){
        let task = {
            name:taskName,
            priority:taskPriority,
            status:statusList.TODO,
        }
        toDo.push(task);
    }
}

function changeStatus(){
    let taskName = this.querySelector('.task__text').textContent
    toDo = toDo.map((task) => {
        if(task.name === taskName){
            task.status = statusList.DONE;
        }
        return task
    });
    console.log(toDo)
    render();
}

function removeTask(){
    toDo = toDo.filter((task)=>{
       const taskName = this.previousElementSibling.textContent;
       return task.name !== taskName
    });
    render();
}

function render(){
    clearLists();
    toDo.sort(sortByStatus);

    toDo.map((task) => {
        const insertPath = document.querySelector('.' + task.priority).lastElementChild;
        const taskNode = createTaskNode(task);
        insertPath.append(taskNode);
    })
}

function clearLists(){
    const lowPriorityPath = document.querySelector('.' + priorityList.LOW + '__tasks');
    const highPriorityPath = document.querySelector('.' + priorityList.HIGH + '__tasks');
    lowPriorityPath.textContent = '';
    highPriorityPath.textContent = '';
}

function sortByStatus(a,b){
    const statusRaiting = {
        'ToDo' : 3,
        'Done': 5,
    }
    return statusRaiting[a.status] - statusRaiting[b.status]
}

