function calc(operator, a, b) {
    let result;
    if (isNaN(+a)||isNaN(+b)) {
        return "your argument(s) ain't a number";
    }
    switch (operator) {
        case "add":
            result = +a + +b;
            break;
        
        case "multi":
            result = a * b;
            break;

        case "subtract":
            result = a - b;
            break;
        default: 
            return "unknown operator";
            break;
    }
    return result;
}
console.log(calc("add",3,2))