let action = prompt("Введите тип действия:");
let a = +prompt("Введите первое число:");
let b = +prompt("Введите первое число:");
let result;

const operations = {
  add: [a + b],
  multi: [a * b],
  subtract: [a - b],
};

switch (action) {
  case "add":
    result = operations.add;
    break;
  case "multi":
    result = operations.multi;
    break;
  case "subtract":
    result = operations.subtract;
    break;
  default:
    result = false;
    break;
}

if (result == false) {
  alert("Неизвестный оператор, вычисление невозможно");
} else {
  alert(result);
}
