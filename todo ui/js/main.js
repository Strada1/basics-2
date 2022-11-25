import { render } from "./render.js";
import { UI_ELEMENT } from "./UI.js";

const STATUS = {
  DONE: "Done",
  TO_DO: "To Do",
};

const PRIORITY = {
  LOW: "low",
  HIGH: "high",
};

const ERROR = {
  EMPTY: "Empty value.",
  REPEAT_TASK: "Task already exists, please enter another one.",
};

let list = [];

for (let form of UI_ELEMENT.FORM) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.target.reset();
  });
}

function deleteTask(task) {
  list = list.filter((element) => element.name !== task);
  render();
}

function changeStatus(event, task) {
  list.forEach((element) => {
    if (element.name === task && event.target.checked) {
      element.status = STATUS.DONE;
    } else if (element.name === task && !event.target.checked) {
      element.status = STATUS.TO_DO;
    }
  });
  render();
}

function addTask(task, priority) {
  const indexTask = list.findIndex((element) => element.name === task);

  if (task === "") {
    console.log(ERROR.EMPTY);
  } else if (indexTask !== -1) {
    console.log(ERROR.REPEAT_TASK);
  } else {
    list.push({
      name: task,
      status: STATUS.TO_DO,
      priority: priority,
    });
    render();
  }
}

UI_ELEMENT.BTN_ADD_TASK_HIGH.addEventListener("click", () =>
  addTask(UI_ELEMENT.NEW_TASK_HIGH.value, PRIORITY.HIGH)
);
UI_ELEMENT.BTN_ADD_TASK_LOW.addEventListener("click", () =>
  addTask(UI_ELEMENT.NEW_TASK_LOW.value, PRIORITY.LOW)
);

export { STATUS, PRIORITY, list, deleteTask, changeStatus };
