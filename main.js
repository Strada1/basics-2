import { getHighTask, getLowTask } from "./get_task.js";
import { render } from "./render.js";

const formHigh = document.querySelector(".todo_add_form_high");
const formLow = document.querySelector(".todo_add_form_low");

export const TODO_LIST = [];
export const STATUS = {
  TODO: "To Do",
  DONE: "Done",
};
export const PRIORITY = {
  HIGH: "high",
  LOW: "low",
};

formHigh.addEventListener("submit", getHighTask);
formHigh.addEventListener("submit", render);
formHigh.addEventListener("submit", function (evt) {
  evt.preventDefault();
});
formLow.addEventListener("submit", getLowTask);
formLow.addEventListener("submit", render);
formLow.addEventListener("submit", function (evt) {
  evt.preventDefault();
});
