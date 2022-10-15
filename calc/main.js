//Калькулятор через switch//

let a = prompt("Первое число");
let show = prompt("Операция");
let b = prompt("Второе число");

function calc(show, a, b) {
  a = Number(a);
  b = Number(b);

  if (isNaN(a) || isNaN(b)) { //Проверка на NaN
    return 'Вводите только числа';
  } else switch (show) {
    case "-":
      return a - b;
    case "+":
      return a + b;
    case "*":
      return a * b;
    case "/": {
      if (b == 0) { //Проверка на деление на 0
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

//Калькулятор через if//

let c = prompt ('Первое число');
let option = prompt ('Операция');
let d = prompt('Второе число');

function calc(option, c, d) {

  a = Number(c);
  b = Number(d);

  if (isNaN(c) || isNaN(d)) {
    return 'Вводите только числа';
  } else if (option == '-') {
      return (c - d);
  } else if (option == '+') {
      return (c + d);
  } else if (option == '*') {
      return (c * d);
  } else if (option == '/') {
      if (d == 0) {
          alert ('На 0 делить нельзя!'); 
      } else return (c / d);
  } else if (option == '**') {
      return (c ** d);
  }
}

alert(calc(option, c, d));