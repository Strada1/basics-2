function calc(operator, a, b) {
  switch (operator) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "*":
      return a * b;
      break;
    default:
      break;
  }
  console.log(calc("add", 1, 2));
  console.log(calc("multi", 1, 2));
  console.log(calc("subtract", 3, 2));
}
