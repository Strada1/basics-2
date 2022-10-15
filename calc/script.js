function calc(action, first, second){
    switch (action){
        case "add":
            return a + b;
        case "multi":
            return  a * b;
        case "subtract":
            return a - b;
    }
}
let a = 5;
let b = 7;
console.log(calc("add", a, b));
console.log(calc("multi", a, b));
console.log(calc("subtract", a, b));
