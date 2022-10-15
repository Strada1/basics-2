// function calc(operator, a, b) {
//   if (operator === "add") {
//     return a + b;
//   } else if (operator === "multi") {
//     return a * b;
//   } else if (operator === "subtract") {
//     return a - b;
//   }
// }

// console.log(calc("add", 1, 2));
// console.log(calc("multi", 1, 2));
// console.log(calc("subtract", 3, 2));

function calc(operator, a, b) {
  switch (operator) {
    case "add":
      return a + b;
    case "multi":
      return a * b;
    case "subtract":
      return a - b;
    default:
      return "Ошибка";
  }
}

console.log(calc("add", 3, 2));
console.log(calc("multi", 3, 2));
console.log(calc("subtract", 3, 2));
console.log(calc("sdss", 1, 2));
