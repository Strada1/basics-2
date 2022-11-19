import { UI_ELEMENT, STATUS, PRIORITY } from "./constants.js";
import { CreateTaskHTML } from "./taskHTML.js";

const createTaskHTML = new CreateTaskHTML();
export function render(list){
    let dom = document.body.querySelectorAll('.task-list');
    dom.forEach(element => element.replaceChildren());

    let sortList = [...list].sort((a, b) => (b.status).localeCompare(a.status));
    sortList.forEach(element => {
        let task = createTaskHTML.makeTask(element.name,
             checkboxStatus(element.status), element.priority);
        let taskList = choiceTaskList(element.priority);
        taskList.append(task);
    });
}   

function checkboxStatus(status){
    return status === STATUS.DONE;
} 

function choiceTaskList(priority){
    let result;
    if(priority === PRIORITY.HIGH)
        result = UI_ELEMENT.HIGH_TASK
    else 
        result = UI_ELEMENT.LOW_TASK

    return result.querySelector('.task-list');
}