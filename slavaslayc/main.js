const formHighTask = document.querySelector('#frmHighTask')
const formLowTask = document.querySelector('#frmLowTask')
const highTasks = document.querySelector('.highTaskList')
const lowTasks = document.querySelector('.lowTaskList')

function addTask (taskPriority, targetForm) {
    const inputValue = targetForm[0].value;
    const divElement = document.createElement('div');
    const paragraphElement = document.createElement('p');
    const textElement = document.createTextNode(inputValue)
    const checkBox = document.createElement('input')
    const deleteButton = document.createElement('input')
    checkBox.type = 'checkbox';
    deleteButton.type = 'submit';
    deleteButton.value = '';
    deleteButton.className = 'deleteButton';
    divElement.className = 'task';
    divElement.append(checkBox);
    paragraphElement.append(textElement);
    divElement.append(paragraphElement);
    divElement.append(deleteButton);
    taskPriority.append(divElement);
}

formHighTask.addEventListener('submit', evt => {
    evt.preventDefault();
    addTask(highTasks, formHighTask)
})

formLowTask.addEventListener('submit', evt => {
    evt.preventDefault();
    addTask(lowTasks, formLowTask)
})