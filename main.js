const OPERATION = {
    ADD : "+",
    MULTI : "*",
    SUBTRACT : "-",
}

function calc(event) {
    event.preventDefault();
    const firstNumber = Number(document.querySelector("#firstNumber").value);
    const secondNumber = Number(document.querySelector("#secondNumber").value);
    const operation = document.querySelector('#operation').value;
    const result = document.querySelector('#result');
    
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        result.textContent = 'error';
        return;
    }
    switch(operation) {
        case OPERATION.ADD:
            result.textContent = firstNumber + secondNumber;
            break;
        case OPERATION.MULTI:
            result.textContent = firstNumber * secondNumber;
            break;
        case OPERATION.SUBTRACT:
            result.textContent = firstNumber - secondNumber;
            break;
        default:
            result.textContent = 'error';
    }
}
const button = document.querySelector('#buttonResult');
button.addEventListener('click', calc);

function saveResult() {
    let result = document.querySelector('#result').textContent;
    const div = document.createElement('div');
    div.setAttribute('data-memory', true);
    div.textContent = result;
    const divCalc = document.querySelector('.calc');
    divCalc.append(div);
}
const mewSaveResult = document.querySelector('#buttonResult');
mewSaveResult.addEventListener('click', saveResult);

function removeResult(event) {
    if (event.target.dataset.memory != undefined) {
        event.target.remove();
    }
}
document.addEventListener('click', removeResult);