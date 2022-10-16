//калькулятор
function calc(operator, x, y) {
  if (operator === "add") {
    return x + y;
  } else if (operator === "multi") {
    return x * y;
  } else if (operator === "subtract") {
    return x - y;
  }
}

console.log(calc("add", 1, 2));
console.log(calc("multi", 1, 2));
console.log(calc("subtract", 3, 2));

//калькулятор со switch
function calc(operator, x, y) {
  switch (operator) {
    case "add":
      return x + y;
    case "multi":
      return x * y;
    case "subtract":
      return x - y;
  }
}

console.log(calc("add", 1, 2)); // 3
console.log(calc("multi", 1, 2)); // 2
console.log(calc("subtract", 3, 2)); // 1
