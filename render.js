import { TODO_LIST } from "./main.js";
import { STATUS } from "./main.js";
import { PRIORITY } from "./main.js";
import { elementCreation } from "./create_element.js";

export function render() {
  document.querySelector(".checkboxes_high").innerHTML = "";
  document.querySelector(".checkboxes_low").innerHTML = "";

  TODO_LIST.forEach((element, index) => {
    if (element.priority == PRIORITY.HIGH) {
      const taskList = document.querySelector(".checkboxes_high");
      elementCreation(element, index, taskList);
    }
    if (element.priority == PRIORITY.LOW) {
      const taskList = document.querySelector(".checkboxes_low");
      elementCreation(element, index, taskList);
    }
  });
}
