console.log("Hi");
console.log("Privet");

let Hi = `Hello!, ${1 + 3}`;
const num = 1;
let Check = true;
console.log(Hi, num, Check);

console.log("git test");
console.log("1" == 1);
console.log(null == undefined);

console.log("Сколько мне лет?");
let year = 19;
if (year == 18) {
  console.log("Верно");
} else if (year > 18) {
  console.log("Перебор");
} else {
  console.log("Недобор");
}
console.log("Сколько ему лет?");
let age = 18;
let ageTest = age > 17 ? true : false;
console.log(ageTest);

console.log(1 || 2 || null || 3);
console.log(1 && 2 && null && 3);
console.log(1 != 2);

function calc(a, b, func) {
  switch (a) {
    case undefined:
      console.log("Не введено первое число");
  }
  switch (b) {
    case undefined:
      console.log("Не введено второе число");
  }
  switch (func) {
    case "add":
      return a + b;
  }
  switch (func) {
    case "multi":
      return a * b;
  }
  switch (func) {
    case "substract":
      return a - b;
  }
}
console.log(calc(1, 2, "substract"));
