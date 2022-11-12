const button = document.querySelector("button");

const OPERATIONS = {
  ADD: "add",
  SUBSTRACT: "substract",
  MULTI: "multi",
  DIVIDE: "divide",
};

function calc() {
  let calculator = document.querySelector(".calculator");
  let firstNumber = document.querySelectorAll("input")[0];
  let secondNumber = document.querySelectorAll("input")[1];
  let result = document.querySelectorAll("input")[2];

  let operator = document.querySelector("select").value;

  switch (operator) {
    case OPERATIONS.ADD:
      result.value = Number(firstNumber.value) + Number(secondNumber.value);
      break;
    case OPERATIONS.SUBSTRACT:
      result.value = Number(firstNumber.value) - Number(secondNumber.value);
      break;
    case OPERATIONS.MULTI:
      result.value = Number(firstNumber.value) * Number(secondNumber.value);
      break;
    case OPERATIONS.DIVIDE:
      result.value = Number(firstNumber.value) / Number(secondNumber.value);
      break;
    default:
      alert("ERROR");
  }

  let newDiv = document.createElement("div");
  newDiv.textContent = result.value;
  newDiv.className = "resultHistory";
  newDiv.onclick = this.remove;
  calculator.append(newDiv);
}

button.addEventListener("click", calc);
