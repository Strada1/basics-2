const operations = {
  add: '+',
  multi: '*',
  sub: '-',
  error: 'Unknown operation',
}

function calc(a, b, operation) {
  switch (operation) {
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

console.log(calc(1, 2, operations.add));
console.log(calc(5, 5, operations.multi));
console.log(calc(10, 2, operations.sub));
console.log(calc(10, 2, operations.blabla));