// Ошибки
import { ERROR } from "./error.js";
// Оператор
import { ACTION } from "./error.js";
//Логика калькулятора
document.getElementById("btn").onclick = function () {
  const numOne = document.getElementById("inOne").value; // Первое число
  const numTwo = document.getElementById("inTwo").value; // Второе число
  const operator = document.querySelector(".oper").value; // Выбранный оператор
  const out = document.querySelector(".equal p"); // Значение
  if (!numOne || !numTwo) {
    // Нет числа
    out.textContent = ERROR.NO_DIGIT;
  } else {
    switch (operator) {
      case ACTION.ADDITION:
        let result = +numOne + +numTwo;
        out.textContent = +result.toFixed(3); // 0.1 + 0.3 // 1.35 + 6.35
        break;
      case ACTION.SUBTRACTION:
        out.textContent = +numOne - +numTwo;
        break;
      case ACTION.MULTIPLY:
        out.textContent = +numOne * +numTwo;
        break;
      case ACTION.DIVIDE:
        if (+numTwo === 0) {
          out.textContent = ERROR.DIVIDE_ZERO; // Деление на ноль
          return;
        }
        out.textContent = +numOne / +numTwo;
        break;
    }
  }

  let div = document.createElement("div");
  div.className = "showresult";
  div.textContent = +out.textContent;
  document.body.append(div);

  const result = document.querySelectorAll(".showresult");
  result.forEach((el) => {
    el.onclick = () => {
      el.remove();
    };
  });
};
