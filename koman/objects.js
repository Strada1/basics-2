const operations = {
  add: "+",
  multi: "*",
  subtract: "-",
};
const answers = {
  enterNumber: "Please enter a number",
  useOperator: "Please use only '+', '-', or '*' operator!",
};
function calc(operator, a, b) {
  if (isNaN(a) || isNaN(b)) {
    return answers.enterNumber;
  }
  switch (operator) {
    case operations.add:
      return a + b;
    case operations.multi:
      return a * b;
    case operations.subtract:
      return a - b;
    default:
      return answers.useOperator;
  }
}

console.log(calc(operations.add, 1, 3));
console.log(calc(operations.multi, 1, 3));
console.log(calc(operations.subtract, 5, 3));

console.log(calc(operations.multi, "two", 2));
console.log(calc("sub", 3, 2));
