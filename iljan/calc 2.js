let num1 = +prompt(`Введите первое число`, `0`);
let num2 = +prompt(`Введите второе число`, `0`);
let actionNum = prompt(`choose action (+ - *)`, `+`);

function calc(action, arg1, arg2) {
    if (isNaN(arg1) || isNaN(arg2)) {
        return `работаю только с числами`;
    } else switch (action) {
        case `+`:
            return arg1 + arg2;
        case `*`:
            return arg1 * arg2;
        case `-`:
            return arg1 - arg2;
        default:
            return `oops, error`;
    }
}

alert(calc(actionNum, num1, num2));