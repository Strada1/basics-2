const operations = {
  add: "+",
  subtract: "-",
  multi: "*",
  devide: "/",
}

const operator = document.querySelector("#calc__select");
const result = document.querySelector(".result");
let total;

document.querySelector(".equals").addEventListener("click", function calcSum() {
  const firstNum = Number(document.querySelector(".first-number").value);
  const secondNum = Number(document.querySelector(".second-number").value);

  switch (operator.value) {
    case operations.add:
      total = +(firstNum + secondNum).toFixed(16);
      break;
    case operations.subtract:
      total = firstNum - secondNum;
      break;
    case operations.multi:
      total = firstNum * secondNum;
      break;
    case operations.devide:
      if (secondNum === 0) {
        total = "error";
        break;
      } else {
        total = firstNum / secondNum;
        break;
      }
  }

  const newElem = document.createElement("div");
  newElem.textContent = total;
  result.prepend(newElem);

  newElem.addEventListener("click", function () {
    this.remove();
  })
})