let number1 = +prompt(`first value`, `0`);
let number2 = +prompt(`second value`, `0`);
let actionUser = prompt(`choose action (add subtract multi)`, `add`);

function calc(action, arg1, arg2) {
    if (isNaN(arg1) || isNaN(arg2)) {
        return `работаю только с числами`;
    } else switch (action) {
        case `add`:
            return arg1 + arg2;
        case `multi`:
            return arg1 * arg2;
        case `subtract`:
            return arg1 - arg2;
        default:
            return `oops, error`;
    }
}

alert(calc(actionUser, number1, number2));

console.log(calc(`add`, 2, 3));