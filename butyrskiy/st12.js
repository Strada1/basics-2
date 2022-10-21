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

// Example #2

function color(color) {
  switch (color) {
    case 'Orange':
      console.log('Color is Orange');
      break;
    case 'Red':
      return console.log('Color is Red');
    case 'White':
    case 'Green':
      return console.log('Color White or Green');
    default:
      console.log('Color is not defined');
  }
}

color('Orange');
color('Red');
color('White');
color('Green');
color('Black');
