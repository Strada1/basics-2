const sum = "sum";
const multi = "multi";
const subtract = "subtract";

function calc(operator, num1, num2) {
   let ans = NaN;
   switch (operator) {
      case sum:
         ans = num1 + num2;
         break;
      case multi:
         ans = num1 * num2;
         break;
      case subtract: {
         ans = num1 - num2;
         break;
      }
   }
   return ans;
}

console.log(calc(sum, 4, 5));
