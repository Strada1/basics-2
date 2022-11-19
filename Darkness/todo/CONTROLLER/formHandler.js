import { addTask } from "../MODEL/list.js";
import { STATUS } from "../MODEL/list.js";
import { list } from "../MODEL/list.js";
import { render } from "../VIEW/render.js";
import { changeStatus } from "../MODEL/list.js";
import { removeTask } from "../MODEL/list.js";
import { sortedListByStatus } from "../MODEL/list.js";

export const formHandler = (event) => {
  event.preventDefault();
  const target = event.target;
  const inputName = target.children[0].name;
  const inputValue = target.children[0].value.trim();
  if (!inputValue) {
    alert("Поле не должно быть пустым");
    return null;
  }

  const listId = list.length > 0 ? list[list.length - 1].id + 1 : 1;
  addTask({
    name: inputValue,
    priority: inputName,
    status: STATUS.IN_PROGRESS,
    id: listId,
  });
  render(sortedListByStatus());
};

export const checkBoxHandle = (event) => {
  const checkboxButton = event.target;
  checkboxButton.classList.toggle("checked-button");
  event.target.parentElement.classList.toggle("checked");
  const checkBoxId = +event.target.parentElement.dataset.id;
  changeStatus(checkBoxId);
  render(sortedListByStatus());
};

export const removeHandler = (event) => {
  const deleteButton = event.target;
  const taskId = +deleteButton.parentElement.dataset.id;
  removeTask(taskId);
  render(sortedListByStatus());
};
