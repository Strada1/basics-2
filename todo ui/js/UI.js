import { PRIORITY, STATUS, deleteTask, changeStatus } from "./main.js";

const UI_ELEMENT = {
  FORM: document.querySelectorAll("form"),
  TASK_SPAN: document.querySelectorAll("span"),
  TASK_CONTAINER_LIST: document.querySelectorAll(".task-container"),
  BTN_ADD_TASK_HIGH: document.querySelector(".high .btn-add"),
  BTN_ADD_TASK_LOW: document.querySelector(".low .btn-add"),
  NEW_TASK_HIGH: document.querySelector(".high .new-task"),
  NEW_TASK_LOW: document.querySelector(".low .new-task"),
  BTN_DEL_TASK: document.querySelectorAll(".btn-del"),
  CHECKBOX: document.querySelectorAll(".check"),
  PRIORITY_CONTAINER_HIGH: document.querySelector(".high"),
  PRIORITY_CONTAINER_LOW: document.querySelector(".low"),
};

function CreateTaskInUI(task, priority) {
  let taskWrapper = document.createElement("span");
  taskWrapper.textContent = task;
  taskWrapper.className = "task";

  let labelCheck = document.createElement("label");
  labelCheck.className = "label-check";

  let checkbox = document.createElement("input");
  checkbox.className = "check";
  checkbox.type = "checkbox";

  let btnDel = document.createElement("button");
  btnDel.textContent = "+";
  btnDel.className = "btn btn-del";
  btnDel.type = "submit";

  let taskContainer = document.createElement("div");
  taskContainer.className = "task-container";

  taskContainer.append(taskWrapper);
  taskContainer.append(labelCheck);
  labelCheck.append(checkbox);
  taskContainer.append(btnDel);

  switch (priority) {
    case PRIORITY.HIGH:
      UI_ELEMENT.PRIORITY_CONTAINER_HIGH.append(taskContainer);
      break;
    case PRIORITY.LOW:
      UI_ELEMENT.PRIORITY_CONTAINER_LOW.append(taskContainer);
      break;
  }

  btnDel.addEventListener("click", () => {
    deleteTask(task);
  });

  checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
      changeStatus(task, STATUS.DONE);
      taskContainer.style.opacity = 0.5;
    } else {
      changeStatus(task, STATUS.TO_DO);
      taskContainer.style.opacity = 1;
    }
  });
}

export { UI_ELEMENT, CreateTaskInUI };
