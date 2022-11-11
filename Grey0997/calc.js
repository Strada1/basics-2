
const total = document.querySelector(".total");
const button = document.querySelector(".result");
const ret = document.querySelector('.return')
let select = document.querySelector(".selectCalc").value;
button.addEventListener('click',calc)
ret.addEventListener('click',() => total.textContent = 0)


function calc(){
    let firstNumber = Number(document.querySelector(".firstInput").value);
    let secondNumber = Number(document.querySelector(".secondInput").value);
    
    let select = document.querySelector(".selectCalc").value;

    if (secondNumber == 0 && select == '/'){
        return total.textContent = 'Делить на ноль нельзя!!!'
    }
    
    switch (select) {
        case '+':
            total.textContent = firstNumber + secondNumber;
            break;
        case '-':
            total.textContent = firstNumber - secondNumber;
            break;
        case '*':
            total.textContent = firstNumber * secondNumber;
            break;
        case '/':
            total.textContent = firstNumber / secondNumber;
            break;
        case '^':
            total.textContent = firstNumber**secondNumber;
            break;
        case '%':
            total.textContent = (secondNumber / 100)*firstNumber ;  
            break;  
             

    }
};
