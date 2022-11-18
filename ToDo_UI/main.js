let inputTask;

let textHighInput = document.querySelector(".content_input-High");
let addButtonHighTask = document.querySelector('.button_add-High');
let placeContainerHigh = document.querySelector('.content_list-High')

addButtonHighTask.addEventListener('click',AddNewTaskHigh);
addButtonHighTask.addEventListener('submit',AddNewTaskHigh);
textHighInput.addEventListener('change', ReadTaskHighInput);

let textLowInput = document.querySelector('.content_input-Low');
let addButtonLowTask = document.querySelector('.button_add-Low');
let placeContainerLow = document.querySelector('.content_list-Low');

addButtonLowTask.addEventListener('click', AddNewTaskLow);
textLowInput.addEventListener('change', ReadTaskLowInput);

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

function AddNewTaskHigh (){
    let divContainer = document.createElement('div');
    divContainer.className = "list_point";
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
    placeContainerHigh.insertAdjacentElement("afterbegin", divContainer);
    divContainer.insertAdjacentElement("beforeend", divCheckBox);
    divCheckBox.insertAdjacentElement('afterbegin', checkBox);
    divContainer.insertAdjacentElement("beforeend", divButtonRemove);
    divButtonRemove.insertAdjacentElement('afterbegin', buttonRemove);
    divContainer.insertAdjacentElement("beforeend",divText);
    divText.insertAdjacentElement("afterbegin", p)
}

function AddNewTaskLow (){
    let divContainer = document.createElement('div');
    divContainer.className = "list_point";
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
    placeContainerLow.insertAdjacentElement("afterbegin", divContainer);
    divContainer.insertAdjacentElement("beforeend", divCheckBox);
    divCheckBox.insertAdjacentElement('afterbegin', checkBox);
    divContainer.insertAdjacentElement("beforeend", divButtonRemove);
    divButtonRemove.insertAdjacentElement('afterbegin', buttonRemove);
    divContainer.insertAdjacentElement("beforeend",divText);
    divText.insertAdjacentElement("afterbegin", p)
}
