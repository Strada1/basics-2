function calculate(done, x, y) {
  switch (done) {
    case "+":
      return x + y;
  }
  switch (done) {
    case "-":
      return x - y;
  }
  switch (done) {
    case "*":
      return x * y;
  }
  switch (done) {
    case "**":
      return x ** y;
  }
}
const done = {
  add: "+",
  subtract: "-",
  multi: "*",
  letsgo: "**",
};
console.log(calculate("+", 2, 3)); //5
console.log(calculate("*", 6, 8)); //48
console.log(calculate("-", 16, 8)); //8
console.log(calculate("**", 5, 3)); //125
console.log(calculate("+", 5, 7)); //12
