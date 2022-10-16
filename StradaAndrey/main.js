function calc(
   math, 
   numberOne = console.log("Значение 'numberOne' и 'numberTwo' не введено. Результат:"), 
   numberTwo = console.log("Значение 'numberTwo' не введено. Результат:")){
   let result;
   if (numberOne !== Number(numberOne) || numberTwo !== Number(numberTwo)){
      return result = 'Необходимо вводить только числа';
   }
   switch (math) {
      case 'add': 
         result = numberOne + numberTwo;
         break;
      case 'multi':
         result = numberOne * numberTwo;
         break;
      case 'subtract':
         result = numberOne - numberTwo;
         break;
      default:
         result = 'Выберите "add" || "multi" || "subtract"'
         break;
   }
   return result;
}
console.log(calc('add', '4' ,3 ));
console.log(calc('умножить', 2, 1));
console.log(calc('subtract', 3, 2 ));

