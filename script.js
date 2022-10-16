/*
if (browser === 'Edge')
    alert("You've got the Edge!")
else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera')
    alert('Okay we support these browsers too')
else
    alert('We hope that this page looks ok!');
*/
/*
const number = +prompt('Введите число между 0 и 3', '');
switch (number) {
    case 0: alert('Вы ввели число 0');
        break;
    case 1: alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
    default:
        alert('шляпа');
}
*/

let operation = prompt("операция, варианты: add, multi, subract");
let a = prompt("число а");
let b = prompt("число b");

alert(calc(operation, a, b));

function calc(operation, a, b)
{
    switch(operation) {
        case 'add':
            return +a + +b;
        case 'multi':
            return +a * +b;
        case 'subtract':
            return +a - +b;
        default:
            return 'Неверные входные данные';
    }
}