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