// console.log("start 2")

// const name = 'Jon'

// let admin = name

// console.log(admin);

// let typeNumber = 14;
// let typeString = "Roadmap"
// let typeBoolen = true 

// console.log(typeof(typeNumber));
// console.log(typeof(typeString));
// console.log(typeof(typeBoolen));

// console.log("как " + "тебя" + " зовут ");

// let counter = 1
// console.log(++counter);

// console.log("/t/n" + 2);

// console.log("HElloooooo")

// console.log(typeof(undefined));
// console.log(typeof(null));
// console.log(null == "\n0\n");

let a = 15;

a == 15 ? console.log(true) : console.log(false); 


// const calc = (method, a, b) => {
//     if (method === "plus") {
//         MathPlus(a, b)
//     } else if (method === "minus") {
//         MathMinus(a, b)
//     } else if (method === "multiplication") {
//         MathMult(a, b)
//     } else if (method === "division") {
//         MathDivision(a, b)
//     } 
// }



// let MathPlus = (a, b) => {
//     let result = a + b
//     console.log(result);
// }

// let MathMinus = (a, b) => {
//     let result = a - b
//     console.log(result);
// }
// let MathMult = (a, b) => {
//     let result = a * b
//     console.log(result);
// }
// let MathDivision = (a, b) => {
//     let result = a / b
//     console.log(result);
// }

let MathPlus = (a, b) => console.log(a + b);
let MathMinus = (a, b) => console.log(a - b);
let MathMult = (a, b) => console.log(a * b);
let MathDivision = (a, b) => console.log(a / b);


const Calc = (method, a, b) => {
    switch (method) {
        case "Plus" :
            MathPlus(a, b)
            break;
        case "Minus" :
            MathMinus(a, b)
            break;
        case "Mult" :
            MathMult(a, b)
            break;
        case "Division" :
            MathDivision(a, b)
            break;
        default:
            console.log("Указан неправильный метод");
    }
}

Calc("Plus", 5 , 5)
Calc("Minus", 5 , 5)
Calc("Mult", 5 , 5)
Calc("Division", 5 , 5)

