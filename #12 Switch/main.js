const USERERRORS = `ooops, ERROR`;

let number1 = +prompt(`first value`, `0`);
let number2 = +prompt(`second value`, `0`);
let actionUser = prompt(`choose action (add subtract multi)`, `add`);

const operations = {
    add: "add",
    multi: "multi",
    subtract: "subtract"
}

function calc(action, arg1, arg2) {
    if (isNaN(arg1) || isNaN(arg2)) {
        return USERERRORS;
    } else switch (action) {
        case operations.add:
            return arg1 + arg2;
        case operations.multi:
            return arg1 * arg2;
        case operations.subtract:
            return arg1 - arg2;
        default:
            return USERERRORS;
    }
}

alert(calc(actionUser, number1, number2));