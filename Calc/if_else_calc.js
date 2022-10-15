function calc(operator, value1, value2) {
    if (operator == "add") {
        return console.log(+value1 + +value2);
    } else if (operator == "multi") {
        return console.log(+value1 * +value2);
    } else if (operator == "subtract") {
        return console.log(+value1 - +value2);
    } else {
        console.log("Оператор введен не правильно");
    }
}

calc("subtract", 1, 2);