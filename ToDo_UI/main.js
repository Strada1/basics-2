let inputTask;

let textInput = document.querySelector(".content_input");
let addButton = document.querySelector('.button_add');
let placeText = document.querySelector('.content_list')
let placeContainer = document.querySelector('.list_point')
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
    divText.innerHTML = inputTask;
    placeText.insertAdjacentElement("afterend",divContainer);

}