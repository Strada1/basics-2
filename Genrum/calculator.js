function calc(operator, a, b) {
    let result;
    if (isNaN(+a)||isNaN(+b)) {
        return "your argument(s) ain't a number";
    }
    switch (operator) {
        case "add":
            result = +a + +b;
        
        case "multi":
            result = a * b;

        case "subtract":
            result = a - b;
        default: 
            return "unknown operator";
    }
    return result;
}
console.log(calc("add",3,2))