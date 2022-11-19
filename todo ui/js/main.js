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
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}

function deleteTask(task) {
  list = list.filter((el) => {
    return el.name !== task;
  });
  render();
}

function changeStatus(task, status) {
  list = list.filter((el) => {
    if (el.name === task && el.status === status) {
      return (el.status = STATUS.DONE);
    } else if (el.name === task && el.status === status) {
      return (el.status = STATUS.TO_DO);
    }
  });
}

function addTask(task, priority) {
  const index = list.findIndex((el) => el.name === task);
  if (task === "") {
    console.log(ERROR.EMPTY);
  } else if (index !== -1) {
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

UI_ELEMENT.BTN_ADD_TASK_HIGH.addEventListener("click", () => {
  addTask(UI_ELEMENT.NEW_TASK_HIGH.value, PRIORITY.HIGH);
});
UI_ELEMENT.BTN_ADD_TASK_LOW.addEventListener("click", () => {
  addTask(UI_ELEMENT.NEW_TASK_LOW.value, PRIORITY.LOW);
});

render();

export { STATUS, PRIORITY, list, deleteTask, changeStatus };
