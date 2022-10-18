const operations = {
  add: "+",
  subtract: "-",
  multi: "*",
};

function calc(operator, a, b) {
 
    switch (operator) {
    case operations.add:
      return a + b;

    case operations.subtract:
      return a - b;

    case operations.multi:
      return a * b;

    default:
      return "Ошибка при вводе оператора";
  }
}

console.log(calc(operations.add, 16, 120));
console.log(calc(operations.subtract, 7, 220));
console.log(calc(operations.multi, 82, 720));
console.log(calc(operations.muli, 82, 720));
