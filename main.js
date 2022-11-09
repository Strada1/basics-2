const UI_ELEMENTS = {
  FORM: document.querySelector('.calc'),
  NUMBER_1: document.querySelector('.calc__number--one'),
  NUMBER_2: document.querySelector('.calc__number--two'),
  OPERATION: document.querySelector('.calc__operation'),
  BUTTON_SUBMIT: document.querySelector('.calc__btn-submit'),
  OUTPUT: document.querySelector('.calc__output')
}

const OPERATIONS = {
  ADD: '+',
  MULTI: '*',
  SUB: '-',
}

function calc(a, b, operation) {
  switch (operation) {
    case OPERATIONS.ADD:
      return a + b;
    case OPERATIONS.MULTI:
      return a * b;
    case OPERATIONS.SUB:
      return a - b;
    default:
      break;
  }
}