function calc(operator, a, b) {
  if (operator === "add") {
    return a + b;
  }
  if (operator === "multi") {
    return a * b;
  }
  if (operator === "subtract") {
    return a - b;
  }
}
console.log(calc("add", 1, 2));
console.log(calc("multi", 1, 2));
console.log(calc("subtract", 3, 2));

function calc(operator, a, b) {
  switch (operator) {
    case "add":
      console.log(a + b);
      break;
    case "multi":
      console.log(a * b);
      break;
    case "subtract":
      console.log(a - b);
      break;
  }
}
calc("add", 1, 2);
calc("multi", 1, 2);
calc("subtract", 3, 2);
