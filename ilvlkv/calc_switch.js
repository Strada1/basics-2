let action = prompt("Введите тип действия:");
let a = +prompt("Введите первое число:");
let b = +prompt("Введите первое число:");
let result;

switch (action) {
  case "add":
    result = a + b;
    break;
  case "multi":
    result = a * b;
    break;
  case "subtract":
    result = a - b;
    break;
  default:
    result = false;
    break;
}

alert(result);
