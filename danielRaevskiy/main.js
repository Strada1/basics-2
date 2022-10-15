

function calc(operator, a, b) {
    switch (a != +a) {
      case true:
        return "Введите число";
    }
    switch (b != +b) {
      case true:
        return "Введите число";
    }
    switch (operator) {
      case "add":
        return +a + +b;
      case "multi":
        return a * b;
      case "subtract":
        return a - b;
      default:
        return "Не верное значение";
    }
  }

console.log(calc('add', 666, 2));