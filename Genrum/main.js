import {calc} from "./calc.js";
import {operations} from "./calc.js";

function handleCalc() {
    let num1 = document.getElementById("a").value;
    let num2 = document.getElementById("b").value;
    let oper = document.getElementById("dropdown").value;
    let result = document.querySelector('p')
    result.textContent = calc(oper, num1, num2);
    let div = document.createElement("div");
    div.textContent = result.textContent;
    document.body.append(div);
    div.addEventListener("click", div.remove);
}

let button = document.getElementById("=");
button.addEventListener("click", handleCalc);



