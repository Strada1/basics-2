import { UI_ELEMENTS } from "./UI.js";
import { calc } from "./calc.js";

function getCalcResult() {
  event.preventDefault();
  let result = calc(+UI_ELEMENTS.NUMBER_1.value, +UI_ELEMENTS.NUMBER_2.value, UI_ELEMENTS.OPERATION.value);
  if (result === Infinity) {
    result = 0
  }
  UI_ELEMENTS.OUTPUT.textContent = result;
  createCalcLog(result);
}

function createCalcLog(value) {
  let div = document.createElement('div');
  div.classList.add('history-block');
  div.textContent = value;
  UI_ELEMENTS.HISTORY_BOX.prepend(div);
  div.addEventListener('click', deleteCalcLog);
}

function deleteCalcLog() {
  this.remove();
}

UI_ELEMENTS.FORM.addEventListener('submit', getCalcResult);