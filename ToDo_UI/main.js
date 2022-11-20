let inputTask;

let textHighInput = document.querySelector(".content_input-High");
let addButtonHighTask = document.querySelector('.button_add-High');
let placeContainerHigh = document.querySelector('.content_list-High')
let statusCheckBox = document.querySelector('.input_checkbox')

addButtonHighTask.addEventListener('click',AddNewTaskHigh);
addButtonHighTask.addEventListener('submit',AddNewTaskHigh);
textHighInput.addEventListener('change', ReadTaskHighInput);

let textLowInput = document.querySelector('.content_input-Low');
let addButtonLowTask = document.querySelector('.button_add-Low');
let placeContainerLow = document.querySelector('.content_list-Low');

addButtonLowTask.addEventListener('click', AddNewTaskLow);
textLowInput.addEventListener('change', ReadTaskLowInput);

const Status = {
    ToDo: 'To Do',
    InProgress: 'In Progress',
    Done: 'Done',
}

const Priority = {
    Low: 'Low',
    Middle: 'Middle',
    High: 'High',
}

function CreateElementForArray(task,status,priority)
{
    return {
        task: task,
        status: status,
        priority: priority,
    }
}

function AddElementArray(task, status,priority)
{
    myArray.push(CreateElementForArray(task, status, priority));
}

function DeleteElementArray(currentTask)
{
    for (let i = 0; i < myArray.length; i++)
    {
        if(myArray[i].task === currentTask)
        {
            myArray.splice(i,1);
        }
    }
}

function ChangeStatus(currentTask, newStatus)
{
    for (let i = 0; i < myArray.length; i++)
    {
        if(myArray[i].task === currentTask)
        {
            switch (newStatus)
            {
                case Status.Done:
                    myArray[i].status = Status.Done;
                    break;
                case Status.InProgress:
                    myArray[i].status = Status.InProgress;
                    break;
                case Status.ToDo:
                    myArray[i].status = Status.ToDo;
                    break;
                default:
                    console.log('Такого статуса нет!');
            }
        }
    }
}

function ReadTaskHighInput()
{
    inputTask = textHighInput.value;
    return inputTask;
}

function ReadTaskLowInput()
{
    inputTask = textLowInput.value;
    return inputTask;
}

function AddNewTaskHigh (event){
    event.preventDefault()
    let divContainerHigh = document.createElement('div');
    divContainerHigh.className = "list_point";
    let divText = document.createElement('div');
    divText.className = "text_point";
    let p = document.createElement('p');
    p.innerHTML = inputTask;
    let divCheckBox = document.createElement('div');
    let checkBox = document.createElement('input');
    checkBox.className = "input_checkbox";
    checkBox.type = 'checkbox';
    checkBox.checked;
    let divButtonRemove = document.createElement('div');
    let buttonRemove = document.createElement('button');
    buttonRemove.className = 'button_remove';
    buttonRemove.textContent = 'X';
    placeContainerHigh.insertAdjacentElement("afterbegin", divContainerHigh);
    divContainerHigh.insertAdjacentElement("beforeend", divCheckBox);
    divCheckBox.insertAdjacentElement('afterbegin', checkBox);
    divContainerHigh.insertAdjacentElement("beforeend", divButtonRemove);
    divButtonRemove.insertAdjacentElement('afterbegin', buttonRemove);
    divContainerHigh.insertAdjacentElement("beforeend",divText);
    divText.insertAdjacentElement("afterbegin", p)
    divButtonRemove.addEventListener('click', function (){
        divContainerHigh.remove();
        DeleteElementArray(p.innerHTML=inputTask)
    })

    AddElementArray(p.innerHTML = inputTask,Status.ToDo, Priority.High);

   if(checkBox.checked)
   {
       checkBox.addEventListener('change',ChangeStatus(p.innerHTML=inputTask, 'ToDo'))
       ChangeStatus(p.innerHTML, 'ToDo')
       ChangeStatus(p.innerHTML=inputTask,'ToDo')
       console.log(myArray)
   }
   else
   {
       checkBox.addEventListener('change',ChangeStatus(p.innerHTML=inputTask, 'Done'))
       ChangeStatus(p.innerText, 'Done')
       console.log(myArray)
   }
}

function AddNewTaskLow (){
    let divContainerLow = document.createElement('div');
    divContainerLow.className = "list_point";
    let divText = document.createElement('div');
    divText.className = "text_point";
    let p = document.createElement('p');
    p.innerHTML = inputTask;
    let divCheckBox = document.createElement('div');
    let checkBox = document.createElement('input');
    checkBox.className = "input_checkbox";
    checkBox.type = 'checkbox';
    let divButtonRemove = document.createElement('div');
    let buttonRemove = document.createElement('button');
    buttonRemove.className = 'button_remove';
    buttonRemove.textContent = 'X';
    placeContainerLow.insertAdjacentElement("afterbegin", divContainerLow);
    divContainerLow.insertAdjacentElement("beforeend", divCheckBox);
    divCheckBox.insertAdjacentElement('afterbegin', checkBox);
    divContainerLow.insertAdjacentElement("beforeend", divButtonRemove);
    divButtonRemove.insertAdjacentElement('afterbegin', buttonRemove);
    divContainerLow.insertAdjacentElement("beforeend",divText);
    divText.insertAdjacentElement("afterbegin", p);

    divButtonRemove.addEventListener('click', function (){
        divContainerLow.remove();
        DeleteElementArray(p.innerHTML = inputTask)
    })

    AddElementArray(p.innerHTML = inputTask,Status.ToDo, Priority.Low);
}

let myArray = [];
console.log(myArray);