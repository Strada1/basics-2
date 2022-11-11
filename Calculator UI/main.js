const operation = {
  add: "+",
  subtract: "-",
  multi: "*",
  division: "/",
};

document.querySelector(".btn").addEventListener("click", function () {
  const number1 = document.querySelector(".number1").value;
  const number2 = document.querySelector(".number2").value;
  const operator = document.querySelector(".operator").value;
  const result = document.querySelector(".result");

  if (number1 !== "" && number2 !== "") {
    switch (operator) {
      case operation.add:
        result.textContent = +number1 + +number2;
        break;
      case operation.subtract:
        result.textContent = +number1 - +number2;
        break;
      case operation.multi:
        result.textContent = +number1 * +number2;
        break;
      case operation.division:
        if (number2 !== "0") {
          result.textContent = +number1 / +number2;
        } else {
          alert("На ноль делить нельзя!");
        }
    }
  } else {
    alert("Введите значение!");
  }
});
