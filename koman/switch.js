function calc(action, a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Please enter a number.";
  }
  switch (action) {
    case "add":
      return a + b;
    case "multi":
      return a * b;
    case "subtract":
      return a - b;
    default:
      return "Please use the correct action!";
  }
}

console.log(calc("add", 1, 2));
console.log(calc("multi", 1, 2));
console.log(calc("subtract", 3, 2));

console.log(calc("multi", "two", 2));
console.log(calc("sub", 3, 2));
