const calc = (action, a, b) => {
  let result;
  switch (action) {
    case 'add':
      result = a + b;
      break;
    case 'multi':
      result = a * b;
      break;
    case 'substract':
      result = a - b;
      break;
    default:
      result = 'Error';
  }
  return result;
};

console.log(calc('multi', 1, 2));
console.log(calc('add', 1, 2));
console.log(calc('substract', 1, 2));
console.log(calc('test', 1, 2));
