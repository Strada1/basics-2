import { createTaskInUI, UI_ELEMENT } from "./UI.js";
import { list } from "./main.js";

function render() {
  UI_ELEMENT.TASKS_WRAPPER.forEach((element) => element.replaceChildren());

  list.forEach((element) => createTaskInUI(element.name, element.priority, element.status));
}

export { render };
