let a = prompt("Первое число");
let show = prompt("Операция");
let b = prompt("Второе число");

function calc(show, a, b) {
  a = Number(a);
  b = Number(b);

  switch (show) {
    case "-":
      return a - b;
    case "+":
      return a + b;
    case "*":
      return a * b;
    case "/": {
      if (b == 0) {
        alert("На 0 делить нельзя!");
      } else return a / b;
    }
    case "**":
      return a ** b;
    default:
      alert("Введена неверная операция");
  }
}

alert(calc(show, a, b));
