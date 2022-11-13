import { calcResults } from "./calcResults.js";
export const calcHandler = () => {
  const OPERATORS = {
    MULTI: (a, b) => a * b,
    DIVISION: (a, b) => a / b,
    SUM: (a, b) => a + b,
    SUBTRACT: (a, b) => a - b,
  };

  const firstNum = document.querySelector("#firstNum").value, //первое число
    secondNum = document.querySelector("#secondNum").value, //второе число
    operator = document.querySelector("#operator").value, //оператор
    result = document.querySelector("#result");
  //isNan возвращает false для всех числовых значений
  if (!isNaN(firstNum) && !isNaN(secondNum)) {
    for (let key in OPERATORS) {
      if (key === operator) {
        result.innerHTML = OPERATORS[key](+firstNum, +secondNum);
        calcResults.insertAdjacentHTML(
          "beforeend",
          `<div>${result.value}</div>`
        );
      }
    }
  } else {
    alert("Вы уверены что ввели числовые значения?");
  }
};
