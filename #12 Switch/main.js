const ADD = `add`;
const MULTI = `multi`;
const SUBTRACT = `subtract`;
const USERERRORS = `ooops, ERROR`;

let number1 = +prompt(`first value`, `0`);
let number2 = +prompt(`second value`, `0`);
let actionUser = prompt(`choose action (add subtract multi)`, `add`);

function calc(action, arg1, arg2) {
    if (isNaN(arg1) || isNaN(arg2)) {
        return USERERRORS;
    } else switch (action) {
        case ADD:
            return arg1 + arg2;
        case MULTI:
            return arg1 * arg2;
        case SUBTRACT:
            return arg1 - arg2;
        default:
            return USERERRORS;
    }
}

alert(calc(actionUser, number1, number2));