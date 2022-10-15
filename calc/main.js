'use strict';

function calc (nameCalc,a,b) {
  if (isNaN(a) || isNaN(b)) {
    return 'работаю только с числами';
  }
  switch (nameCalc) {
    case 'add':
      return a+b;
      break;
    case 'multi':
      return a*b;
      break;
    case 'subtract':
      return a-b;
      break;
  } 

}

console.log(calc('add','asdas',3));
console.log(calc('multi',5,5));
console.log(calc('subtract',10,6))