function calc(operation, a, b){
  if (typeof(a || b) !== "number") {
    return "Неверный операнд";
  }
  switch (operation) {
    case  "add":
      return a + b;
    case "multi":
      return a * b;
    case "substract":
      return a - b;
    default:
      return "Неверный оператор";
  }
}

console.log(calc("multi", 2, 4));
console.log(calc("strada", 2, 3));
console.log(calc("add", "String", 3));
console.log(calc("add", true, 3));