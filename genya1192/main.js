

function calc (a, b, action) {
   switch (action) {
    case "умножить":
        return a * b;
        break;
    case "сложить":
        return a + b;
        break;
    case "вычесть":
        return a - b;
        break;
    default: "No result"
   }
}
let a = Number(prompt("Введите первое число"));
let b = Number(prompt ("Введите второе число"));
let action = prompt ("Введите действие (умножить, сложить, вычесть)");
alert (calc(a,b,action));

