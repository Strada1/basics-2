function calc(action, a, b) {
  let result;

  switch (action) {
    case 'add':
      result = a + b;
      break;
    case 'multi':
      result = a * b;
      break;
    case 'subtract':
      result = a - b;
      break;
    default:
      result = `Неверное значение - ${action}`;
      break;
  }

  return result;
}

console.log(calc('add', 2, 2));
console.log(calc('multi', 2, 2));
console.log(calc('subtract', 2, 2));
console.log(calc('mylti', 2, 2)); // Обработка неизвестного действия
