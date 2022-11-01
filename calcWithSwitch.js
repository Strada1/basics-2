function calc (identifier, a, b) {

    let result;

    if (isValid(a, b)) {
        switch (identifier) {
            case "add":
                result = a + b;
                break;
            case "multi":
                result = a * b;
                break;
            case "subtract":
                result = a - b;
                break;
            default:
                result = "Неверный идентификатор, попробуйте снова";
        }

    } else {
        return "Ошибка, введите число"
    }
}

function isValid(a, b) {
    return (!isNaN(a) && !isNaN(b));
}

console.log (calc ("add", 1, 2));
console.log (calc ("multi", 1, 2));
console.log (calc ("subtract", 3, 2));
console.log (calc ("div", 3, 2));
console.log (calc ("add", 3, "word"));