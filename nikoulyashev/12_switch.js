function calc(operator, a, b) {
  if (a === undefined) {
    return 'Введите числа'
  } else if (b === undefined) {
    return 'Введите второе число';
  };
  switch (operator) {
    case 'add': 
      return a + b;
    case 'multi':
      return a * b;
    case 'subtract':
       return a - b;
    default:
       return 'Нет такого оператора';
  };

};

console.log(calc('subtract', 2, 11));
console.log(calc('multi', 2, 2));
console.log(calc('add', 1, 1));

console.log(calc('adaad', 1, 1));
console.log(calc('add', "2плюс", 2));
console.log(calc('add'));
console.log(calc('add', 5));



// Добавить проверку на отсутствие аргументов
// Добавить проверку на то являются ли a и b числами

// Как реализовать эти проверки?

