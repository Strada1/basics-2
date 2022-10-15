function calc(operator, value1, value2) {
    switch (operator) {
        case "add":
            console.log(+value1 + +value2);
            break;
        case "multi":
            console.log(+value1 * +value2);
            break;
        case "subtract":
            console.log(+value1 - +value2);;
            break;
        default:
            console.log("Оператор введен не правильно");
    }
}

calc("subtract", 1, 2);