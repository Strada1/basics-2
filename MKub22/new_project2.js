"use strict"
// let name = "Matvey";
// console.log(name);
// const surname = "Kublanov";
// console.log(surname);
// let momName = "Tatyana";
// console.log(momName); 
// let isName = 4 > 1;
// console.log(isName);
// let str = "Goat"
// console.log(str);
// let snow = 12434554565657676768n;
// console.log(typeof snow);

// console.log("Matvey" + " " + "Kublanov");
// console.log('1' + 2);

// let hasWife = false;
// console.log(hasWife);

// let age = prompt('How old are you?', '');
// if (age == 18) {
//  alert('You are good')
// } else if (age < 18) {
//     alert('Man, you are too young')
// } else if (age > 18) {
//     alert('Oh, you are old')
// } else{
//     alert('Interesting')
// }

// let age = prompt('How old are you?', '');
// if (age == 18) ? alert('You are good') :
//  (age < 18) ? alert('Man, you are too young') :
//  (age > 18) ? alert('Oh, you are old') : alert('Interesting')

// let login = prompt('Ваш логин?', '');
// if (login === 'Admin') {
//     let pass = prompt('Ваш пароль:', '');
//     if (!(pass === '' || pass === null)) {
//         alert('You are good')
//     }
//     // else if(pass === "password") {
//     //     alert('You are so good')
//     // }
// }
// else if (login === "" || login === null){
//     alert('Try again')
// }
// else{
//     alert('Another wrong one')
// }

// function calcSqrt(x,n) {
//     let result = x;
//     for(let i = 1; i < n; i++) {
//         result *=x
//     }
//     return result;

// }
// let x = prompt('x?', '');
// let n = prompt('n?','');

// if(n < 1) {
//     alert('Не поддерживается', '');
// }
// else{
//     alert(calcSqrt(x,n))
// }


// for (let i=1; i <= 19; i++) {
//     console.log(i);
// }

let x = +prompt('x?', '');
let n = +prompt('n?','');
 
function add(x,n){
    return x + n;
}
function multi(x,n){
    return x * n;
}
function substract(x,n){
    return x - n;
}
function calc(x, n, func){
    const result = func(x,n);
    return result;
}    
const operations = {
    add:"+",
    multi:"*",
    substract:"-",
}    
if (!isNaN(x) && !isNaN(n)) {
switch (prompt('+,- или *')){
        case "+":
            alert(calc(+x,+n, operations));
        break;
        case "-":
             alert(calc(+x,+n, operations));
        break;
        case "*":
             alert(calc(+x,+n, operations));
            break;
            default:
                alert("А что вам надо?");
}
}
else{
    alert('Это не число'); 
}

