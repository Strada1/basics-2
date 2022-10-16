let resultCalc;

function calc(a, b, c) {
    switch (b) {
        case '+':
          resultCalc = a + c;
          break;
        case '-':
            resultCalc = a - c;
          break;
        case '*':
            resultCalc = a * c;
          break;
        default:
            resultCalc = "Что-то пошло не так";
      }
    return resultCalc;
}

console.log(calc(4, '+', 2));
console.log(calc(-6, '1', 2));



// let resultCalc;
// let firstNum = prompt('Введите первое число');
// let secondNum = prompt('Введите второе число');
// let mathOperation = prompt('Введите знак для математической операции', "+, - или *");

// function calc(firstNum, mathOperation, secondNum) {
//     switch (mathOperation) {
//         case '+':
//           resultCalc = Number(firstNum) + Number(secondNum);
//           break;
//         case '-':
//             resultCalc = firstNum - secondNum;
//           break;
//         case '*':
//             resultCalc = firstNum * secondNum;
//           break;
//         default:
//             resultCalc = "Что-то пошло не так";
//       }
//     return resultCalc;
// }

// alert(calc(firstNum, mathOperation, secondNum));
