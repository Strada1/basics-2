function calcSum(operator, a, b) {

  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "add" || "+":
      return a + b;
      

      case "multi" || "+":
      return a - b;
      

      case "substract" || "+":
      return a - b;
      break;

  }
}

let a = prompt("Введите число ' a '", "");
let b = prompt("Введите число ' b '", "");
let operator = prompt("Введите один из операторов' + ', ' - ', ' * '", "");


alert(calcSum(operator, a, b));