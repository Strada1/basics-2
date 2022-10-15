function calcValue (selectAction, valueOne, valueTwo) {
  switch (selectAction) {
    case 'add':
      return valueOne + valueTwo;
      break;
    case 'multi':
      return valueOne * valueTwo;
      break;
    case 'subtract':
      return valueOne - valueTwo;
      break;
    case 'div':
      return valueOne / valueTwo;
      break;
    default:
      return 'ввели неверное значение';
      break;      
  }
}

console.log (calcValue ("add", 1, 2));
console.log (calcValue ("multi", 1, 2));
console.log (calcValue ("subtract", 1, 2));
console.log (calcValue ("div", 1, 2));
console.log (calcValue ("sgeg", 1, 2));
console.log (calcValue ("sgeg", '1bv', 2));