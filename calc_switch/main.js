function calc(operator, a, b) {
   
    switch (operator) {
    case "add":
      return a + b;

    case "subtract":
      return a - b;

    case "multi":
      return a * b;

    default:
      return ("Ошибка при вводе оператора");
  }
}

console.log(calc("add", 16, 120));
console.log(calc("subtract", 7, 220));
console.log(calc("multi", 82, 720));
console.log(calc("mvlti", 82, 720));
