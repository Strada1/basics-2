const formHighTask = document.querySelector('#formHighTask');
const formLowTask = document.querySelector('#formLowTask');
const highTasks = document.querySelector('.highTaskList')
const lowTasks = document.querySelector('.lowTaskList')


const STATUS = {
    IN_PROGRESS: 'In Progress',
    DONE: 'Done',
}

const PRIORITY = {
    HIGH: 'High',
    LOW: 'Low',
}

let list = []

function changeStatus (event) {
    const taskChangeStatus = event.target.nextElementSibling.textContent;
    const isChecked = event.target.checked;
    // list.forEach(task => (task.name === taskChangeStatus && isChecked) ? task.status = STATUS.DONE : task.status = STATUS.IN_PROGRESS);
    list.forEach(task => {
        if (task.name === taskChangeStatus && isChecked) {
            task.status = STATUS.DONE;
        } else if (task.name === taskChangeStatus && !isChecked) {
            task.status = STATUS.IN_PROGRESS;
        }
    });
}

function addTaskList(event) {
    event.preventDefault();
    list.push(getFormData(event));
    render();
}

function deleteTaskList (event) {
    event.preventDefault();
    const textDeleteTask = event.target.previousElementSibling.textContent;
    list = list.filter(task => task.name !== textDeleteTask);
    render()
}

function getFormData (event) {
    const taskText = event.target[0].value;
    const taskPriority = event.target[0].getAttribute('data-priority');
    return {name: taskText, status: STATUS.IN_PROGRESS, priority: taskPriority,};
}

function render () {
    highTasks.innerHTML = '';
    lowTasks.innerHTML = '';
    list.forEach(item => {
        const inputValue = item.name;
        const divElement = document.createElement('div');
        const paragraphElement = document.createElement('p');
        const textElement = document.createTextNode(inputValue);
        const checkBox = document.createElement('input');
        const deleteButton = document.createElement('input');
        checkBox.type = 'checkbox';
        deleteButton.type = 'submit';
        deleteButton.value = '';
        deleteButton.className = 'deleteButton';
        divElement.className = 'task';
        divElement.append(checkBox);
        paragraphElement.append(textElement);
        divElement.append(paragraphElement);
        divElement.append(deleteButton);
        if (item.priority === PRIORITY.HIGH) {
            highTasks.append(divElement);
        } else if (item.priority === PRIORITY.LOW) {
            lowTasks.append(divElement);
        }

        deleteButton.addEventListener('click', deleteTaskList);
        checkBox.addEventListener('change', changeStatus);
    });
}

formHighTask.addEventListener('submit', addTaskList);
formLowTask.addEventListener('submit', addTaskList);
