function calcSum() {
    const OPERATION = {
      add: "+",
      subtract: "-",
      multi: "*",
      devide: "/",
    }
    const firstNum = Number(document.querySelector(".first-number").value);
    const secondNum = Number(document.querySelector(".second-number").value);
    const operator = document.querySelector("#calc__select").value;
    const result = document.querySelector(".result");
  
    if (operator === OPERATION.add) {
      result.insertAdjacentHTML("afterbegin", `<div>${+(firstNum + secondNum).toFixed(16)}</div>`);
    } else if (operator === OPERATION.subtract) {
      result.insertAdjacentHTML("afterbegin", `<div>${+(firstNum - secondNum).toFixed(16)}</div>`);
    } else if (operator === OPERATION.multi) {
      result.insertAdjacentHTML("afterbegin", `<div>${+(firstNum * secondNum).toFixed(16)}</div>`);
    } else if (operator === OPERATION.devide) {
      if (secondNum === 0) {
        result.insertAdjacentHTML("afterbegin",`<div>error</div>`)
      } else {
        result.insertAdjacentHTML("afterbegin", `<div>${+(firstNum / secondNum).toFixed(16)}</div>`);
      }
    }
    const history = document.querySelectorAll(".result div");
    history.forEach(press => {
      press.addEventListener("click", function () {
        this.remove();
      })
    });
  }
  
  const button = document.querySelector(".equals");
  button.addEventListener("click", calcSum);
  