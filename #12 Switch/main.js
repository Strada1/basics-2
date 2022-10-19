const USERERRORS = `ooops, ERROR`;

const operations = {
    add: "+",
    multi: "*",
    subtract: "-",
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

// test

console.log(calc(`add`, 2, 2));
console.log(calc(`+`, 2, 2));