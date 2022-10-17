const ADD = "add";
const MULTI = "multi";
const SUBT = "subtract";
const enterNumber = "Please enter a number.";
const useAction = "Please use the correct action!";

function calc(action, a, b) {
  if (isNaN(a) || isNaN(b)) {
    return enterNumber;
  }
  switch (action) {
    case ADD:
      return a + b;
    case MULTI:
      return a * b;
    case SUBT:
      return a - b;
    default:
      return useAction;
  }
}

console.log(calc("add", 1, 2));
console.log(calc("multi", 1, 2));
console.log(calc("subtract", 3, 2));

console.log(calc("multi", "two", 2));
console.log(calc("sub", 3, 2));
