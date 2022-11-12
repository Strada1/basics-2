export const OPERATIONS = {
  ADD: '+',
  SUB: '-',
  MULTI: '*',
  DIV: '/',
}

export function calc(num1, num2, operation) {
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