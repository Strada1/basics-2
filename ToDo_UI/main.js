let inputTask;

let textInput = document.querySelector(".content_input");
let addButton = document.querySelector('.button_add');
let placeContainer = document.querySelector('.content_list')

addButton.addEventListener('click',AddNewTask);
textInput.addEventListener('change', ReadTextInput);

function ReadTextInput()
{
    inputTask = textInput.value;
    return inputTask;
}

function AddNewTask (){
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
    placeContainer.insertAdjacentElement("afterbegin", divContainer);
    divContainer.insertAdjacentElement("beforeend",divText);
    divText.insertAdjacentElement("afterbegin", p)
    divContainer.insertAdjacentElement("beforeend", divCheckBox);
    divCheckBox.insertAdjacentElement('afterbegin', checkBox);
    divContainer.insertAdjacentElement("beforeend", divButtonRemove);
    divButtonRemove.insertAdjacentElement('afterbegin', buttonRemove);
}

