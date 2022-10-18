function calculator(action, number1, number2) {
  switch (action) {
      case 'plus':
          return number1 + number2;
      case 'multi':
          return number1 * number2;
      case 'subtract':
          return number1 - number2;
  }
}

console.log(calculator('plus', 1, 2)) 
console.log(calculator('multi', 1, 2)) 
console.log(calculator('subtract', 3, 2)) 