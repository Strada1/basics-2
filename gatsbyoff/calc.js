const operations = {
    add: "+",
    multi: "*",
    subtract: "-"
}
function calc(action, a, b) {
    switch(action) {
        case operations.add:
            return (a + b);
             break;
        case operations.multi:
            return (a * b);
            break;
        case operations.subtract:
            return (a - b);
            break;
    }
}
console.log(calc("+", 1, 2));
console.log(calc("*", 1, 2));
console.log(calc("-", 3, 2));