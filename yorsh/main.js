arg1 = +prompt("Введите первый аргумент", " ");
arg2 = +prompt("Введите второй аргумент", " ");
action = prompt("Выберити действие", " ");

function calc(action, arg1, arg2) {
  switch (action) {
    case "add":
      return arg1 + arg2;
      break;
    case "multi":
      return arg1 * arg2;
      break;
    case "subtract":
      return arg1 - arg2;
      break;
  }
}

console.log(calc("add", 1, 2));
console.log(calc("multi", 1, 2));
console.log(calc("subtract", 4, 2));
