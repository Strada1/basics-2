//походу я научился пользоваться коммитами и заливать их на гитхаб)))

function sum(num1, num2) {
   return num1 + num2;
}
function multi(num1, num2) {
   return num1 * num2;
}
function subtract(num1, num2) {
   return num1 - num2;
}

function calc(operator, num1, num2) {
   let ans = NaN;
   switch (operator) {
      case "sum":
         ans = sum(num1, num2);
         break;
      case "multi":
         ans = multi(num1, num2);
         break;
      case "subtract": {
         ans = subtract(num1, num2);
         break;
      }
   }
   return ans;
}
let id = prompt('Введи индефикатор нужного действия ("multi", "sum", "subtract"): ', '');
let a = prompt('Введи 1 число', '');
let b = prompt('Введи 2 число', '');
result = calc(id, a, b);

if (isNaN(result)) {
   alert("Ты ввел что-то не так(");
   alert("Перезапусти программу и попробуй еще");
}
else {
   alert(result);
}
