import {calculate} from "./module-calculate.js";

document.querySelector('#submitBtn').addEventListener("click", calculate)

document.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        document.querySelector('#submitBtn').click()
    }
})
