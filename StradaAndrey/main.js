const operations = {
   ADD: 'add',
   MULTI: 'multi',
   SUBTRACT: 'subtract',
}

function calc(
   math, 
   numberOne = console.log("Значение 'numberOne' и 'numberTwo' не введено. Результат:"), 
   numberTwo = console.log("Значение 'numberTwo' не введено. Результат:")){
   let result;
   if (Number.isFinite(numberOne)  && Number.isFinite(numberTwo)){
      switch (math) {
         case operations.ADD: 
            result = numberOne + numberTwo;
            break;
         case operations.MULTI:
            result = numberOne * numberTwo;
            break;
         case operations.SUBTRACT:
            result = numberOne - numberTwo;
            break;
         default:
            result = 'Выберите "add" || "multi" || "subtract"'
            break;
      }
   return result;
   }
return result = 'Необходимо вводить только числа';
}
console.log(calc('add', '4' ,3 ));
console.log(calc('умножить', 2, 1));
console.log(calc('subtract', 3, 2 ));



// function calc(operator, a, b) {
//    const operations = {
//         add: a + b,
//         multi: a * b,
//         subtract: a - b,
//     }
//     if(operations[operator] !== undefined) 
//       return operations[operator];
// }

// console.log(calc("asd", 1, 2));
// console.log(calc("multi", 1, 2));
// console.log(calc("subtract", 3, 2));