const ADD = 'add';
const MULTI = 'multi';
const SUBSTRACT = 'subtract';
const ERROR = 'Unknown operation';

const operations = {
  add: '+',
  multi: '*',
  sub: '-',
}

function calc(a, b, operation) {
  switch (operation) {
    case ADD:
      return a + b;
    case MULTI:
      return a * b;
    case SUBSTRACT:
      return a - b;
    default:
      showError();
      break;
  }
}

function showError() {
  console.log(ERROR)
}

console.log(calc(1, 2, 'add'));
console.log(calc(5, 5, 'multi'));
console.log(calc(10, 2, 'subtract'));
console.log(calc(10, 2, 'minus'));