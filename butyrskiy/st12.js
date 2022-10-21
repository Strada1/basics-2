function calc(operator, a, b) {
  switch (operator) {
    case 'add':
      return a + b;
    case 'multi':
      return a * b;
    case 'subtract':
      return a - b;
    default:
      console.log('Ошибка');
  }
}

console.log(calc('add', 5, 5));
console.log(calc('multi', 5, 5));
console.log(calc('subtract', 5, 5));
