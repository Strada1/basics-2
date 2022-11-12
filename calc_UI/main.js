const NUM1 = document.querySelector("#num1");
const NUM2 = document.querySelector("#num2");

const ADD = "add";
const MULTI = "multi";
const SUBTRACT = "subtract";
const DIVIDE = "divide";

const OPERATOR = document.querySelector("#operator");
const BUTTON_RESULT = document.querySelector("#equal");
const RESULT = document.querySelector(".result");
const RESULTS = document.querySelector("#results");

function getInputValue() {
  let value1 = +NUM1.value;
  let value2 = +NUM2.value;
  return [value1, value2];
}

function getOperator() {
  let action = OPERATOR.value;
  return action;
}

function calc() {
  let arr = getInputValue();
  let action = getOperator();
  let result;

  switch (action) {
    case ADD:
      result = arr[0] + arr[1];
      break;
    case MULTI:
      result = arr[0] * arr[1];
      break;
    case SUBTRACT:
      result = arr[0] - arr[1];
      break;
    case DIVIDE:
      result = arr[0] / arr[1];
      break;
  }
  if (result !== Infinity && !isNaN(result)) {
    RESULT.textContent = +result.toFixed(5);
  } else {
    RESULT.textContent = "ERROR";
  }
}

function addResult() {
  let answer = document.createElement("div");
  answer.className = "result";
  answer.textContent = RESULT.textContent;
  answer.addEventListener("click", () => {
    answer.remove();
  });
  RESULT.remove();
  RESULTS.prepend(answer);
}

BUTTON_RESULT.addEventListener("click", calc);
BUTTON_RESULT.addEventListener("click", addResult);
