import { TODO_LIST } from "./main.js";
import { STATUS } from "./main.js";
import { PRIORITY } from "./main.js";

export function getHighTask() {
  const highTaskName = document.querySelector(".todo_add_input_high");
  if (highTaskName.value != "") {
    TODO_LIST.push({
      name: highTaskName.value,
      status: STATUS.TODO,
      priority: PRIORITY.HIGH,
    });
  }
}

export function getLowTask() {
  const lowTaskName = document.querySelector(".todo_add_input_low");
  if (lowTaskName.value != "") {
    TODO_LIST.push({
      name: lowTaskName.value,
      status: STATUS.TODO,
      priority: PRIORITY.LOW,
    });
  }
}
