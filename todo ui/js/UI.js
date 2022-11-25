import { PRIORITY, STATUS, deleteTask, changeStatus } from "./main.js";

const UI_ELEMENT = {
  FORM: document.querySelectorAll("form"),
  BTN_ADD_TASK_HIGH: document.querySelector(".high .btn-add"),
  BTN_ADD_TASK_LOW: document.querySelector(".low .btn-add"),
  NEW_TASK_HIGH: document.querySelector(".high .new-task"),
  NEW_TASK_LOW: document.querySelector(".low .new-task"),
  TASKS_WRAPPER_HIGH: document.querySelector(".high .tasks_wrapper"),
  TASKS_WRAPPER_LOW: document.querySelector(".low .tasks_wrapper"),
  TASKS_WRAPPER: document.querySelectorAll(".tasks_wrapper"),
};

function createTaskInUI(task, priority, status) {
  const taskContainer = document.createElement("div");
  taskContainer.className = "task-container";

  const taskWrapper = document.createElement("span");
  taskWrapper.textContent = task;
  taskWrapper.className = "task";

  const labelCheck = document.createElement("label");
  labelCheck.className = "label-check";

  const checkbox = document.createElement("input");
  checkbox.className = "check";
  checkbox.type = "checkbox";

  const btnDel = document.createElement("button");
  btnDel.textContent = "+";
  btnDel.className = "btn btn-del";
  btnDel.type = "submit";

  taskContainer.append(taskWrapper);
  taskContainer.append(labelCheck);
  labelCheck.append(checkbox);
  taskContainer.append(btnDel);

  checkbox.addEventListener("click", (event) => changeStatus(event, task));
  btnDel.addEventListener("click", () => deleteTask(task));

  addTaskToThePriorityBlock(priority, taskContainer);
  changeStatusInUI(status, taskContainer, checkbox);
}

function addTaskToThePriorityBlock(priority, element) {
  switch (priority) {
    case PRIORITY.HIGH:
      UI_ELEMENT.TASKS_WRAPPER_HIGH.append(element);
      break;
    case PRIORITY.LOW:
      UI_ELEMENT.TASKS_WRAPPER_LOW.append(element);
      break;
  }
}

function changeStatusInUI(status, element, checkbox) {
  switch (status) {
    case STATUS.DONE:
      element.style.opacity = 0.5;
      checkbox.checked = 1;
      break;
    case STATUS.TO_DO:
      element.style.opacity = 1;
      checkbox.checked = 0;
      break;
  }
}

export { UI_ELEMENT, createTaskInUI };
