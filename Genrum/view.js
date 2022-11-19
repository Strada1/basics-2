import { STATUS , list, changeStatus, deleteTask, addTask } from "./main.js";

let forms  = document.querySelectorAll("form.add-task");
forms.forEach(function(item) { 
    item.addEventListener("submit", submitHandler)
});

function submitHandler(e) {
    e.preventDefault();
    let input = e.target.querySelector(".input-task-create");
    let currentPriority = input.closest(".add-task").previousElementSibling.className;
    addTask(input.value, currentPriority);
    e.target.reset();
    render()
}

function removeTaskDom() {
    let taskName = this.previousElementSibling.textContent;
    deleteTask(taskName);
    render()
}

function changeStatusDom() {
    let taskName = this.nextElementSibling.textContent;
    changeStatus(taskName);
    render();
}

function render() {
    let tasks = document.querySelectorAll(".task");
    for (let task of tasks) {
        task.remove();
    }

    list.forEach(function(item) {
        let div = document.createElement("div");
        div.className = "task";

        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        if (item.status == STATUS.DONE) {checkBox.setAttribute("checked",true)};
        checkBox.addEventListener("change", changeStatusDom);

        let label = document.createElement("label");
        label.className = "task-text";
        label.textContent = item.name;

        let button = document.createElement("button");
        button.type = "button";
        button.className = "button remove-task";
        button.textContent = "+";
        button.addEventListener("click", removeTaskDom);

        div.append(checkBox);
        div.append(label);
        div.append(button);

        let insertHere = document.querySelector(`.${item.priority}`).nextElementSibling;
        insertHere.after(div);
        console.log(list);
    });
}