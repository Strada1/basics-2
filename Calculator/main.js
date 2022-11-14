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
let calc_div = document.getElementById('calc');

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
            return result;
            ResultProcessing();
            break;
        case Operations.Subtraction:
            result = value1 - value2;
            out.innerText = result;
            return result;
            ResultProcessing();
            break;
        case Operations.Multi:
            result = value1 * value2;
            out.innerText = result;
            return result;
            ResultProcessing();
            break;
        case Operations.Division:
            result = Number(value1) / Number(value2);
            out.innerText = result;
            return result;
            ResultProcessing();
            break;
    }
}

import {ResultProcessing} from './calc.js';

// function ResultProcessing()
// {
//     let div = document.createElement('div');
//     div.innerHTML = result;
//     document.body.append(div);
//     div.addEventListener('click', function ()
//     {
//         div.remove();
//     });

