function calc (action="add", num=0, num2=0) {
    switch (action) {
        case "add":
            return num+num2;
            break;
        case "multi":
            return num*num2;
            break;
        case "subtract":
            return num-num2;
            break;
        default:
            return "неизвестное действие!"
    }
}

console.log(calc("add", 1, 2));
console.log(calc("multi", 3, 2));
console.log(calc("subtract", 3, 1));
console.log(calc("magic", 999, 999));