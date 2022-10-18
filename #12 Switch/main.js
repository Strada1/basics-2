const USERERRORS = `ooops, ERROR`;

const a = Number(prompt(`first value`, ``));
const b = Number(prompt(`second value`, ``));
const actionUser = prompt(`choose action (add subtract multi)`, `add`);

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

alert(calc(actionUser, a, b));