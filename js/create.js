import { UI_ELEMENTS, TODO_STATUS } from "./constants.js";
import { deleteItem, changeStatus } from "./main.js";

export function createTaskDom(taskName, taskStatus) {
  const item = document.createElement('div');
  const label = document.createElement('label');
  const input = document.createElement('input');
  const span = document.createElement('span');
  const button = document.createElement('button');
  item.classList.add('todo__item');
  label.classList.add('todo__item-label');
  input.classList.add('todo__item-checkbox');
  span.classList.add('todo__item-checkbox--style');
  button.classList.add('todo__item-delete-btn');
  input.setAttribute('type', 'checkbox');
  button.setAttribute('type', 'button');
  item.prepend(label);
  item.append(taskName);
  item.append(button);
  label.prepend(input);
  label.append(span);

  if (taskStatus === TODO_STATUS.DONE) {
    item.classList.add('item-checked');
    input.setAttribute('checked', 'true');
  }
  button.addEventListener('click', deleteItem);
  span.addEventListener('click', changeStatus);
  return item;
}

export function createItemInHigh(item) {
  UI_ELEMENTS.HIGH_LIST.append(item);
}

export function createItemInLow(item) {
  UI_ELEMENTS.LOW_LIST.append(item);
}