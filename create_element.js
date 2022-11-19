import { TODO_LIST } from "./main.js";
import { render } from "./render.js";

export function elementCreation(element, index, taskList) {
  let newDiv = document.createElement("div");
  let newInput = document.createElement("input");
  let newTask = document.createElement("label");
  let deleteButton = document.createElement("button");

  newTask.textContent = element.name;
  newInput.type = "checkbox";
  newInput.className = "todo_checkbox";
  newDiv.className = "checkbox_box";
  deleteButton.className = "submit_button close";
  deleteButton.textContent = "+";
  deleteButton.id = index;

  newDiv.append(newInput);
  newDiv.append(newTask);
  newDiv.append(deleteButton);
  taskList.append(newDiv);

  deleteButton.addEventListener("click", function () {
    TODO_LIST.splice(deleteButton.id, 1);
    render();
  });
}
