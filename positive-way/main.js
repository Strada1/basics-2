function calc(id, num1, num2){
    switch (id) {
    case "add":
        return +num1 + +num2;
    case "multi":
        return ((num1 > num2) ? num1 : num2);
    case "subtract":
        return +num1 - +num2;
    default:
        alert( "Ошибка");
    }
}

console.log(calc("add", 5, 2));
console.log(calc("multi", 5, 2));
console.log(calc("subtract", 5, 2));