// function calc(operation, firstNumber, secondNumber){
//     if(operation == "add"){
//         return firstNumber + secondNumber;
//     }else if(operation == "multi"){
//         return firstNumber*secondNumber;
//     }else if(operation == "subtract"){
//         return firstNumber - secondNumber;
//     }else{
//         console.log("Неверный формат!");
//     }
// }

// console.log(calc('add', 1, 2));
// console.log(calc('multi', 1, 2));
// console.log(calc('subtract', 3, 2));
// console.log(calc(1, 2, 3));
// console.log(calc('add', 10, 9));
// console.log(calc('add', 12, 9));

function calc(operation, firstNumber, secondNumber){
    switch(operation){
        case "add":
            return firstNumber + secondNumber;
            break;// break не сработает, так как есть return
        case "multi":
            return firstNumber * secondNumber;
            break;
        case "subtract":
            return firstNumber - secondNumber;
            break;        
    }
}

console.log(calc('add', 244, 78));//322
console.log(calc('multi', 15, 15));//225
console.log(calc('subtract', 10, 2));//8