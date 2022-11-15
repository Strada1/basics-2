const OPERATION = {
  ADD: "+",
  SUBSTRACT: "-",
  MULTI: "*",
  DIVISION: "/",
};

document.querySelector(".btn").addEventListener("click", function () {
  const number1 = document.querySelector(".number1").value;
  const number2 = document.querySelector(".number2").value;
  const operator = document.querySelector(".operator").value;
  const result = document.querySelector(".result");

  if (number1 !== "" && number2 !== "") {
    switch (operator) {
      case OPERATION.ADD:
        result.textContent = +number1 + +number2;
        break;
      case OPERATION.SUBSTRACT:
        result.textContent = +number1 - +number2;
        break;
      case OPERATION.MULTI:
        result.textContent = +number1 * +number2;
        break;
      case OPERATION.DIVISION:
        if (number2 !== "0") {
          result.textContent = +number1 / +number2;
        } else {
          alert("На ноль делить нельзя!");
        }
    }
  } else {
    alert("Введите значение!");
  }

  // Создание нового дива =====================================
  const container = document.querySelector(".container")
  let newDiv = document.createElement('div');
  newDiv.className = "historyResult";
  newDiv.textContent = result.textContent;
  container.append(newDiv);

  newDiv.addEventListener('click', function() {
    newDiv.remove();
  })
});
