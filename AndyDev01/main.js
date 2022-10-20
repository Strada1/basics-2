function calc(operation, a, b){
  if (typeof(a || b) !== "number") {
    return "Неверный операнд";
  }
  const operations = {
    add: "+",
    multi: "*",
    substract: "-",
  }
  switch (operation) {
    case  operations.add:
      return a + b;
    case operations.multi:
      return a * b;
    case operations.substract:
      return a - b;
    default:
      return "Неверный оператор";
  }
}

console.log(calc("*", 2, 4));
console.log(calc("strada", 2, 3));
console.log(calc("+", "String", 3));
console.log(calc("-", true, 3));