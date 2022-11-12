const button = document.querySelector(".button");
const ELEMENT = {
  BUTTON: document.querySelector(".button"),
  ALL_RESULT: document.querySelector(".allresult"),
  OPERATONS: document.getElementById("operations"),
  RESULT: document.getElementById("result"),
  FIRST_NUMBER: document.getElementById("firstNumber"),
  SECOND_NUMBER: document.getElementById("secondNumber"),
};

function check(firstNumber, secondNumber) {
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    return true;
  }
}

function calc(operation, a, b) {
  switch (operation) {
    case "+":
      return a + b;
      break;
    case "*":
      return a * b;
      break;
    case "-":
      return a - b;
      break;
    case "/":
      return a / b;
      break;
  }
}

function updateResult() {
  const operation = ELEMENT.OPERATONS.value;
  const firstNumber = +ELEMENT.FIRST_NUMBER.value;
  const secondNumber = +ELEMENT.SECOND_NUMBER.value;

  if (check(firstNumber, secondNumber)) {
    alert("Введите число!");
    return;
  }

  const result = calc(operation, firstNumber, secondNumber);
  ELEMENT.RESULT.innerHTML = result;
  ELEMENT.ALL_RESULT.append(...getCalc(result));
}

function getCalc(result) {
  const results = [];
  const div = document.createElement("div");
  div.append(result);
  results.push(div);
  return results;
}

ELEMENT.ALL_RESULT.addEventListener("click", (e) => {
  const targetResult = e.target;
  targetResult.remove();
});

ELEMENT.BUTTON.addEventListener("click", updateResult);
