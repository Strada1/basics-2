function calc(result, a, b) {
    if (result === "add") {
        return a + b;
    } else if (result === "multi") {
        return a * b;
    } else if (result === "subtract") {
        return a - b;
    }
}

console.log(calc("add", 1, 2));
console.log(calc("multi", 1, 2));
console.log(calc("subtract", 3, 2));

// ПЕРЕПИСАННО НА SWITCH

function calc(result, a, b) {
    switch (result) {
        case "add":
            return a + b
        case "multi":
            return a * b
        case "subtract":
            return a - b
    }
}
console.log(calc("add", 1, 2));
console.log(calc("multi", 1, 2));
console.log(calc("subtract", 3, 2));