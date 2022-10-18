'Use strict'
let a = prompt('Введите 1 операнд', '',Number);
let b = prompt('Введите 2 операнд', '',Number);
let oper = prompt('Введите требуемую операцию','')
let operations = {
    add : (+a + +b) ,
    sub : (a - b) ,
    multi : (a * b),  
}
switch (oper) {
    case "+":
      alert(operations.add);
      break;
  
    case "-":
      alert(operations.sub);
      break;
  
    case "*":
      alert(operations.multi);
      break;
  }