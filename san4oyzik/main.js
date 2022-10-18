const prompt = require("prompt-sync")();

let user = {
    name: 'John',
    age: 30
};

let key = prompt('Что вы хотите знать о пользователе? ', 'name');


console.log(user[key]);