function calc(operator ,num1, num2) {
  
  switch (operator) {
      case '+':
          return num1 + num2;
      case '-':
          return num1 - num2;
      case '/':
          return num1 / num2;
      case '*':
          return num1 * num2;
  }

}


console.log(calc('+',3,2));
console.log(calc('/',15,2));