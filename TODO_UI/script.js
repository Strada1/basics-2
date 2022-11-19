import { UI_ELEMENT, STATUS, PRIORITY, TODO_CLASS } from "./constants.js";
import { render } from "./render.js";

const forms = Array.from(document.forms);
forms.forEach(form => form.addEventListener('submit', formHandler));
UI_ELEMENT.MAIN.addEventListener('click', todoHandler); 

let taskListToShow = [
    {name: 'Выпить пива', priority: PRIORITY.HIGH, status: STATUS.TODO},
    {name: 'Сделать это Ту дУ', priority: PRIORITY.HIGH, status: STATUS.DONE},
    {name: 'Сказать Ту ду ду', priority: PRIORITY.LOW, status: STATUS.TODO},
    {name: 'Порадоваться', priority: PRIORITY.LOW, status: STATUS.DONE}
];

function formHandler(e){
    e.preventDefault();
    let form = e.target;
    let input = form.firstElementChild;
    createTaskObj(input.value, input.dataset.priority);
    input.value = '';
    render(taskListToShow);
}

function todoHandler(e){
    let target = e.target;

    if(isRemove(target))
        removeTask(target);

    if(isCheckbox(target))
        changeStatus(target);
}

function createTaskObj(taskName, taskPriority){
    if(isTask(taskName) || !taskName) return;
    let task = {name: taskName, status: STATUS.TODO, priority: taskPriority, }
    taskListToShow = [...taskListToShow, task];
}

function changeStatus(target){
    let taskName = target.nextElementSibling.textContent;
    let status = target.checked ? STATUS.DONE : STATUS.TODO;
    taskListToShow = taskListToShow.map(element =>
        element.name === taskName ?
            {...element, status} : element
        );
    render(taskListToShow);
}
function removeTask(target){
    let taskName = target.previousElementSibling.textContent;
    taskListToShow = taskListToShow.filter(element => element.name !== taskName);
    render(taskListToShow);
} 

const isCheckbox = (target) =>
    target.className === TODO_CLASS.CHECKBOX;

const isTask = (task) =>
    taskListToShow.some(item => item.name === task);

const isRemove = (target) =>
    target.className === TODO_CLASS.REMOVE;

render(taskListToShow);