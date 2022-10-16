function calc(action, num1, num2) {
  switch (action) {
    case 'add':
      return num1 + num2;
      break;
    case 'multi':
      return num1 * num2;
      break;
    case 'substract':
      return num1 - num2;
      break;
    case 'devide':
      return num1 / num2;
      break;
    default:
      return 'Action is not correct';
  }
}
console.log(calc('add', 1, 2));
console.log(calc('multi', 1, 2));
console.log(calc('substract', 5, 2));
console.log(calc('sd', 1, 2));