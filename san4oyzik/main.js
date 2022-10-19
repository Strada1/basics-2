const prompt = require("prompt-sync")();

// let user = {
//     name: 'John',
//     age: 30
// };

// let key = prompt('Что вы хотите знать о пользователе? ', 'name');


// console.log(user[key]);

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}


let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

console.log(sum);