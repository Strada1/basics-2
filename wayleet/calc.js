const SUM = "sum";
const MULTI = "multi";
const SUBTRACT = "subtract";

function calc(operator, num1, num2) {
   let ans = NaN;
   switch (operator) {
      case SUM:
         ans = num1 + num2;
         break;
      case MULTI:
         ans = num1 * num2;
         break;
      case SUBTRACT: {
         ans = num1 - num2;
         break;
      }
   }
   return ans;
}

console.log(calc(sum, 4, 5));
