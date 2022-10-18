const operations = {
  add: '+',
  multi: '*',
  sub: '-',
  error: 'Unknown operation',
}

function calc(a, b, operation) {
  switch (operations[operation]) {
    case operations.add:
      return a + b;
    case operations.multi:
      return a * b;
    case operations.sub:
      return a - b;
    default:
      showError();
      break;
  }
}

function showError() {
  console.log(operations.error)
}

console.log(calc(1, 2, 'add'));
// console.log(calc(5, 5, 'multi'));
// console.log(calc(10, 2, 'sub'));
// console.log(calc(10, 2, 'minus'));