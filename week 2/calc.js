function calc(iden, a, b) {
    
    if (iden === "add") {
        return (a + b);
    }   else if (iden === "subtract") {
        return (a - b);
    }   else if (iden === "multi") {
        return (a * b);
    }   else {
        return "Неверный идентификатор, попробуйте снова";
    }
}

console.log(calc ("add", 2, 3))
console.log(calc ("subtract", 2, 3))
console.log(calc ("multi", 2, 3))
console.log(calc ("NaN", 2, 3))
