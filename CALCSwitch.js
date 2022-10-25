let menu = prompt("Калькулятор: 1) сложение, 2) вычитание, 3)умножение")
let s1 = prompt("a");
let s2 = prompt("b");
switch (menu) {
   case '1':
      sum = +s1 + +s2;
      alert(sum);
      break;
   case '2':
      sub = s1 - s2;
      alert(sub);
      break;
   case '3':
      mult = s1 * s2;
      alert(mult);
      break;


   default:
      alert('Введите верное число')
      break;
}