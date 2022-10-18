const operations = {
    add: "+",
    multi: "*",
    sub: "-",
}
function calc(operator, a, b) {
    const notANumber = isNaN(Number(a)) || isNaN(Number(b));
    if (notANumber) {
        return "your argument(s) ain't a number";
    }
    switch (operator) {
        case operations.add:
            return +a + +b;
        
        case operations.multi:
            return a * b;

        case operations.sub:
            return a - b;
        default: 
            return "unknown operator";
    }
}
console.log(calc("+",3,2))