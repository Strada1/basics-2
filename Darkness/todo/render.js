import { PRIORITY } from "./list.js";
import { checkBoxHandle } from "./formHandler.js";
import { STATUS } from "./list.js";
import { removeHandler } from "./formHandler.js";
import { formHandler } from "./formHandler.js";

const createElementWithClass = (element, className) => {
  const el = document.createElement(element);
  el.classList.add(className);
  return el;
};

export const render = (taskList) => {
  const mainTodo = document.querySelector(".todo-main");
  while (mainTodo.firstChild) {
    mainTodo.removeChild(mainTodo.firstChild);
  }
  for (let priority in PRIORITY) {
    const todoMainElements = createElementWithClass(
      "div",
      "todo-main_elements"
    );
    mainTodo.append(todoMainElements);
    const priorityTitle = createElementWithClass(
      "div",
      "todo-main_elements-priority"
    );
    priorityTitle.textContent = PRIORITY[priority];
    todoMainElements.append(priorityTitle);
    const taskAddForm = createElementWithClass(
      "form",
      "todo-main-elements-input"
    );
    todoMainElements.addEventListener("submit", formHandler);
    todoMainElements.append(taskAddForm);
    const addTaskInput = createElementWithClass(
      "input",
      "todo-main_elements-input-text"
    );
    addTaskInput.setAttribute("type", "text");
    addTaskInput.setAttribute("name", PRIORITY[priority]);
    const placeholder =
      PRIORITY[priority] === PRIORITY.HIGH
        ? "Добавить важных дел"
        : PRIORITY[priority] === PRIORITY.LOW
        ? "Добавить дел"
        : null;
    addTaskInput.setAttribute("placeholder", placeholder);
    addTaskInput.setAttribute("autocomplete", "off");

    taskAddForm.append(addTaskInput);
    const addTaskButton = createElementWithClass(
      "button",
      "todo-main_elements-add"
    );
    addTaskButton.setAttribute("type", "submit");
    taskAddForm.append(addTaskButton);
    for (let task of taskList) {
      if (PRIORITY[priority] === task.priority) {
        checkBoxRender(todoMainElements, task);
      }
    }
  }
};

const checkBoxRender = (mainEl, task) => {
  const checkboxMainDiv = createElementWithClass(
    "div",
    "todo-main_elements-checkbox"
  );
  checkboxMainDiv.dataset.id = task.id;
  mainEl.append(checkboxMainDiv);

  const checkBoxCheckButton = createElementWithClass(
    "input",
    "todo-main_elements-checkbox_button"
  );
  if (task.status === STATUS.DONE) {
    checkBoxCheckButton.classList.add("checked-button");
    checkboxMainDiv.classList.add("checked");
  }
  checkBoxCheckButton.setAttribute("type", "button");
  checkBoxCheckButton.addEventListener("click", checkBoxHandle);
  checkboxMainDiv.append(checkBoxCheckButton);
  const checkboxTitle = createElementWithClass(
    "div",
    "todo-main_elements-checkbox_title"
  );
  checkboxTitle.textContent = task.name;
  checkboxMainDiv.append(checkboxTitle);

  const deleteButton = createElementWithClass(
    "button",
    "todo-main_elements-checkbox_delete"
  );
  checkboxMainDiv.append(deleteButton);
  deleteButton.addEventListener("click", removeHandler);
};
