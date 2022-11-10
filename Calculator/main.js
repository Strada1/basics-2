const OPERATIONS = {
  ADD: "+",
  MULTI: "*",
  SUBSTACT: "-",
  DEL: "/",
};
let button = document.getElementById("equals");
function calc() {
  let firstNum = document.getElementById("firstNumber").value;
  let secondNum = document.getElementById("secondNumber").value;
  let operation = document.getElementById("calculation").value;
  let result = document.getElementById("result");
  if (operation === OPERATIONS.ADD) {
    result.textContent = Number(firstNum) + Number(secondNum);
  } else if (operation === OPERATIONS.MULTI) {
    result.textContent = Number(firstNum) * Number(secondNum);
  } else if (operation === OPERATIONS.SUBSTACT) {
    result.textContent = Number(firstNum) - Number(secondNum);
  } else if (operation === OPERATIONS.DEL) {
    result.textContent = Number(firstNum) / Number(secondNum);
  }
  return result;
}
button.addEventListener("click", calc);
