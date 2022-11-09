const OPERATOR = {
  PLUS: "+",
  MINUS: "-",
  MULTI: "*",
  DEL: "/",
};
const ERRORS = {
  DEL_NA_0: "Дружище, на '0' делить нельзя!",
};
document.getElementById("equalButton").onclick = function () {
  let firstNum = document.getElementById("firstValue").value;
  let secondNum = document.getElementById("secondValue").value;
  let oper = document.getElementById("kindOfAction").value;
  let result = document.getElementById("result");
  if (oper == OPERATOR.PLUS) {
    result.textContent = (+firstNum + +secondNum).toFixed(2);
  } else if (oper == OPERATOR.MINUS) {
    result.textContent = (firstNum - secondNum).toFixed(2);
  } else if (oper == OPERATOR.MULTI) {
    result.textContent = (firstNum * secondNum).toFixed(2);
  } else if (oper == OPERATOR.DEL) {
    result.textContent = (firstNum / secondNum).toFixed(2);
  }
  if (secondNum === "0") {
    result.textContent = ERRORS.DEL_NA_0;
  }
};
