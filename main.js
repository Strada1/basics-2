const UI_ELEMENTS = {
  FORM: document.querySelector('.calc'),
  NUMBER_1: document.querySelector('.calc__number--one'),
  NUMBER_2: document.querySelector('.calc__number--two'),
  OPERATION: document.querySelector('.calc__operation'),
  BUTTON_SUBMIT: document.querySelector('.calc__btn-submit'),
  OUTPUT: document.querySelector('.calc__output'),
  HISTORY_BOX: document.querySelector('.history'),
}

const OPERATIONS = {
  ADD: '+',
  SUB: '-',
  MULTI: '*',
  DIV: '/',
}

function calc(num1, num2, operation) {
  switch (operation) {
    case OPERATIONS.ADD:
      return num1 + num2;
    case OPERATIONS.MULTI:
      return num1 * num2;
    case OPERATIONS.SUB:
      return num1 - num2;
    case OPERATIONS.DIV:
      return num1 / num2;
    default:
      break;
  }
}

function showCalcResult() {
  event.preventDefault();
  const result = calc(+UI_ELEMENTS.NUMBER_1.value, +UI_ELEMENTS.NUMBER_2.value, UI_ELEMENTS.OPERATION.value)
  UI_ELEMENTS.OUTPUT.textContent = result;
  createHistoryCalc(result);
}

function createHistoryCalc(value) {
  let div = document.createElement('div');
  div.classList.add('history-block');
  div.textContent = value;
  UI_ELEMENTS.HISTORY_BOX.prepend(div);
  div.addEventListener('click', deleteHistoryCalc)
}

function deleteHistoryCalc() {
  this.remove();
}

UI_ELEMENTS.FORM.addEventListener('submit', showCalcResult);