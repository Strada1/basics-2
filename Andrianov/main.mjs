import data from './data.json' assert {type: "json"};

console.log(data.users);

let json = JSON.stringify(data.users);
console.log(typeof json);
console.log(json);

let reversJson = JSON.parse(json);
console.log(reversJson);
