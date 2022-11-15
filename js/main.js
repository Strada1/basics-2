import { UI_ELEMENTS } from "./ui.js";
import { createTask, createItemInHigh, createItemInLow } from "./create.js";

UI_ELEMENTS.HIGH_FORM.addEventListener('submit', (event) => {
  event.preventDefault();
  let taskName = UI_ELEMENTS.INPUT_HIGH.value;
  const taskItem = createTask(taskName);
  createItemInHigh(taskItem);
  event.target.reset();
})

UI_ELEMENTS.LOW_FORM.addEventListener('submit', (event) => {
  event.preventDefault();
  const taskName = UI_ELEMENTS.INPUT_LOW.value;
  const taskItem = createTask(taskName);
  createItemInLow(taskItem);
  event.target.reset();
})