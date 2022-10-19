let operations = {
  add: "+",
  multi: "*",
  subtract: "-",
};

function calc(a, b, c) {
  if (a == operations.add) {
    console.log(b + c);
  }
  if (a == operations.multi) {
    console.log(b * c);
  }
  if (a == operations.subtract) {
    console.log(b - c);
  }
}

calc("+", 1, 2);
calc("*", 3, 2);
calc("-", 3, 2);
