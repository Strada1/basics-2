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

console.log(calc(ADD, 1, 2));
console.log(calc(MULTI, 1, 2));
console.log(calc(SUBT, 3, 2));

console.log(calc(MULTI, "two", 2));
console.log(calc("sub", 3, 2));
