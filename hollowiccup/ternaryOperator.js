function calc(operator, a, b) {
  let result = isValid(a) ? "Число не обнаружено" :
               isValid(b) ? "Число не обнаружено" :
               operator === 'add' ? +a + +b :
               operator === 'multi' ? a * b :
               operator === 'subtract' ? a - b :
               "Данное действие не найдено"

  return result;
}
function isValid(value){
  return (value === null ||
           value === undefined ||
           value === true ||
           value === false ||
           +value === NaN )
}

console.log(calc("add", 1, 2));
console.log(calc("multi", 1, 2));
console.log(calc("subtract", 3, 2));
console.log(calc("", 1, 2));
console.log(calc(null, 1, 2));
console.log(calc(true, 1, 2));
console.log(calc("add", true, 2));
console.log(calc("add", "1", 2));
console.log(calc("multi", 1, "2"));
console.log(calc("subtract", "2", "1"));
console.log(calc("add", null, 2));
console.log(calc("add", undefined, 2));