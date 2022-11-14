export const operations = {
    add: "+",
    multi: "*",
    sub: "-",
    div: "/",
}

export function calc(operator, a, b) {
    const notANumber = isNaN(Number(a)) || isNaN(Number(b));
    if (notANumber) {
        return "your argument(s) ain't a number";
    }
    switch (operator) {
        case operations.add:
            let result = +a + +b;
            return +result.toFixed(16);

        case operations.multi:
            return a * b;

        case operations.sub:
            return a - b;

        case operations.div:
            if (b === 0) { return "error, no division by zero" };
            return a / b;
        default:
            return "unknown operator";
    }
}