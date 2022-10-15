function calc(a, b, operation) {
  switch (operation) {
    case 'add':
      return a + b;
    case 'multi':
      return a * b;
    case 'subtract':
      return a - b;
    default:
      showError();
      break;
  }
}

function showError() {
  console.log('Unknown operation')
}

console.log(calc(1, 2, 'add'));
console.log(calc(5, 5, 'multi'));
console.log(calc(10, 2, 'subtract'));
console.log(calc(10, 2, 'minus'));