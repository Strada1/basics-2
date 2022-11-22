import { OPERATIONS } from "./operations.js";

let button = document.getElementById("equals");

function calc() {
  try {
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
    if (!firstNum && !secondNum) {
      throw new SyntaxError("Данные не полны: не введены числа");
    }
    if (!firstNum) {
      throw new SyntaxError("Данные не полны: не введено первое число");
    }
    if (!secondNum) {
      throw new SyntaxError("Данные не полны: не введено второе число");
    }
    if (!firstNum) {
      throw new SyntaxError("Данные не полны: не введено первое число");
    }
  } catch (e) {
    alert("Error: " + e.message);
  }
}

function remember() {
  let remNumber = document.createElement("saved");
  remNumber.innerHTML = " " + result.textContent;
  saved.append(remNumber);
}
document.querySelector("#saved").addEventListener("click", (e) => {
  const targetResult = e.target;
  targetResult.remove();
});
button.addEventListener("click", calc);
button.addEventListener("click", remember);
