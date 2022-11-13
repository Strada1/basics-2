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
calculate_button.addEventListener('click', Calc);
choiceMain.addEventListener('change', ActionSelect);

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
        case '+':
            result = Number(value1) + Number(value2);
            out.innerText = result;
            console.log(result);
            alert(result)
            return result;
    }
}