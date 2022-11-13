import { calc } from "./calc.js";

//Логика калькулятора
document.getElementById("btn").onclick = function () {
  const numOne = document.getElementById("inOne").value; // Первое число
  const numTwo = document.getElementById("inTwo").value; // Второе число
  const operator = document.querySelector(".oper").value; // Выбранный оператор
  const out = document.querySelector(".equal p"); // Значение
  calc(numOne, numTwo, operator, out);

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
