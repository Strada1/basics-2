(function () {
  const OPERATORS = {
    MULTI: (a, b) => a * b,
    DIVISION: (a, b) => a / b,
    SUM: (a, b) => a + b,
    SUBTRACT: (a, b) => a - b,
  };
  const result = document.querySelector("#result"), //вывод результата
    submit = document.querySelector("#submitButton"); //равно

  submit.addEventListener("click", () => {
    const firstNum = document.querySelector("#firstNum").value, //первое число
      secondNum = document.querySelector("#secondNum").value, //второе число
      operator = document.querySelector("#operator").value; //оператор
    //isNan возвращает false для всех числовых значений
    if (!isNaN(firstNum) && !isNaN(secondNum)) {
      for (let key in OPERATORS) {
        if (key === operator) {
          result.innerHTML = OPERATORS[key](+firstNum, +secondNum).toFixed(2);
        }
      }
    } else {
      alert("Вы уверены что ввели числовое значение?");
    }
  });
})();
