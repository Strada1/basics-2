'use strict';

let operations = {
  add: '+',
  multi: '*',
  subtract: '-',
  }
function calc (operations, a, b){

  switch(operations) {
    case '+':
      return a + b;
      break;
    case '*':
      return a * b;
      break;
    case '-':
      return a - b;
      break;
  };
};

console.log(calc('+',5,5));
console.log(calc('*',5,5));
console.log(calc('-',10,5));