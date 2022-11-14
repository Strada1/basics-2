import {ResultProcessing} from './ResultProcessing.js';
const Operations = {
    Add: '+',
    Subtraction: '-',
    Multi: '*',
    Division: '/',
}

let result;
let value1;
let value2;
let action;

let choiceMain = document.getElementById('select');
let firstNum = document.getElementById('firstNum');
let doubleNum = document.getElementById('doubleNum');
let out = document.getElementById('out')
let calculate_button = document.getElementById('Calculate_button');

firstNum.addEventListener('change',ReadFirstNum);
doubleNum.addEventListener('change', ReadDoubleNum);
choiceMain.addEventListener('change', ActionSelect);
calculate_button.addEventListener('click', Calc);
calculate_button.addEventListener('click', ResultProcessing);

function ReadFirstNum()
{
    value1 = firstNum.value;
    return value1;
}

function ReadDoubleNum()
{
    value2 = doubleNum.value;
    return value2;
}

function ActionSelect()
{
    action = choiceMain.value;
    return action;
}

function Calc()
{
    switch (action)
    {
        case Operations.Add:
            result = Number(value1) + Number(value2);
            out.innerText = result;
            return ResultProcessing(result);
            ResultProcessing(result);

        case Operations.Subtraction:
            result = value1 - value2;
            out.innerText = result;
            return result;
            ResultProcessing(result);

        case Operations.Multi:
            result = value1 * value2;
            out.innerText = result;
            return ResultProcessing(result);
            ResultProcessing(result);

        case Operations.Division:
            result = Number(value1) / Number(value2);
            out.innerText = result;
            return ResultProcessing(result);
            ResultProcessing(result);
    }
}



// function ResultProcessing() {
//     let div = document.createElement('div');
//     div.innerHTML = result;
//     document.body.append(div);
//     div.addEventListener('click', function () {
//         div.remove();
//     });
// }

