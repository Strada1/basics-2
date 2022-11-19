import { TODO_CLASS, PRIORITY } from "./constants.js";

export class CreateTaskHTML{
    makeCheckbox(status){
        let checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.className = TODO_CLASS.CHECKBOX;
        checkBox.checked = status;
        return checkBox;
    }
    
    makeLabel(name){
        let label = document.createElement('label');
        label.className = TODO_CLASS.LABEL;
        label.textContent = name;
        return label;

    }
    makeRemove(){
        let remove = document.createElement('div');
        remove.className = TODO_CLASS.REMOVE;
        return remove;
    }

    makeTask(name, status, priority){
        let taskClass = TODO_CLASS.TASK;
        let task = document.createElement('div');
        let checkBox = this.makeCheckbox(status);
        let label = this.makeLabel(name);
        let remove = this.makeRemove();

        if(status) 
            taskClass += TODO_CLASS.COMPLETE;
        else if(priority === PRIORITY.LOW) 
            taskClass += TODO_CLASS.LOW_PRIORITY;

        task.className = taskClass;
        task.append(checkBox, label, remove);

        return task;
    }
}