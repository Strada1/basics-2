// calc('add', 1, 2) - возвращает 3
// calc('multi', 1, 2) - возвращает 2
// calc('subtract', 3, 2) - возвращает 1

function calc(oper, oneNum, secNum) {

  switch(oper) {
    case 'add':
      return oneNum + secNum;
      break;
      case 'multi':
      return oneNum * secNum;
      break;
      case 'subtract':
      return oneNum % secNum;
      break;
  }

  // if (oper === 'add') {
  //   return oneNum + secNum;
  // } else if (oper === 'multi') {
  //   return oneNum * secNum;
  // } else if (oper === 'subtract') {
  //   return oneNum % secNum;
  // }
}

console.log(calc('add', 1, 2))