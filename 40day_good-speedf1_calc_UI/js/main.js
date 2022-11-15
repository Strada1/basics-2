import { UI_ELEMENTS } from "./UI.js";
import { CalculateResult } from "./calc.js";

function getCalcResult() {
  event.preventDefault();
  // let result = calc(+UI_ELEMENTS.FIRSTOPERAND.value, +UI_ELEMENTS.SECONDOPERAND.value, UI_ELEMENTS.OPERATOR.value);
  let result = CalculateResult(+UI_ELEMENTS.FIRSTOPERAND.value, +UI_ELEMENTS.SECONDOPERAND.value, UI_ELEMENTS.OPERATOR.value);
  if (result === Infinity) {
    result = 0;
  }
  UI_ELEMENTS.OUTPUT.textContent = result;
  createCalcLog(result);
}

function createCalcLog(value) {
  let div = document.createElement('div');
  div.classList.add('history-result-block');
  div.textContent = value;
  UI_ELEMENTS.HISTORY_BOX.prepend(div);
  div.addEventListener('click', deleteCalcLog);
}

function deleteCalcLog() {
  this.remove();
}

UI_ELEMENTS.FORM.addEventListener('submit', getCalcResult);