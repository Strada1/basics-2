import { UI_ELEMENTS } from "./ui.js";
// import { createTask, createItemInHigh, createItemInLow } from "./create.js";

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



function createTask(taskName) {
  const item = document.createElement('div');
  const label = document.createElement('label');
  const input = document.createElement('input');
  const span = document.createElement('span');
  const button = document.createElement('button')
  item.classList.add('todo__item');
  label.classList.add('todo__item-label');
  input.classList.add('todo__item-checkbox');
  span.classList.add('todo__item-checkbox--style');
  button.classList.add('todo__item-delete-btn')
  input.setAttribute('type', 'checkbox');
  button.setAttribute('type', 'button');
  item.prepend(label);
  item.append(button);
  label.prepend(input);
  label.append(span);
  label.append(taskName);
  return item;
}

function createItemInHigh(item) {
  UI_ELEMENTS.HIGH_LIST.append(item);
}

function createItemInLow(item) {
  UI_ELEMENTS.LOW_LIST.append(item);
}