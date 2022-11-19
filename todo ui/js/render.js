import { CreateTaskInUI } from "./UI.js";
import { PRIORITY, list } from "./main.js";

function render() {
  const taskContainer = document.querySelectorAll(".task-container");
  taskContainer.forEach((el) => {
    el.remove();
  });

  list.forEach((el) => {
    switch (el.priority) {
      case PRIORITY.HIGH:
        CreateTaskInUI(el.name, el.priority);
        break;
      case PRIORITY.LOW:
        CreateTaskInUI(el.name, el.priority);
        break;
    }
  });
}

export { render };
