function calc(action, a, b) {
    if (isNaN(a)||isNaN(b)){
        return "Вы вводите не число"
    }
    if (action == "add"){
        return a + b
    } else if (action == "multi"){
        return a * b
    } else if(action == "subtract"){
        return a - b
    } else {
        return "Вы ввели неправильное значение"
    }
}

console.log(calc("add", 1, 2));
console.log(calc("multi", 1, 2));
console.log(calc("subtract", 3, 2));


function calc (action, a, b) {
    if (isNaN(a)||isNaN(b)) {
        return "Вы вводите не число";
    } 
    switch (action) {
        case "add" :
            return a + b;
        case "multi" :
            return a * b;
        case "subtract" :
            return a - b;
        default:
            return "Вы ввели неправильное значение";
    }
}

console.log(calc("add", 1, 2));
console.log(calc("multi", 1, 2));
console.log(calc("subtract", 3, 2));