function calc(action, num1, num2) {
  switch (action) {
    case 'add':
      return num1 + num2;
      break;
    case 'multi':
      return num1 * num2;
      break;
    case 'substruct':
      return num1 - num2;
      break;
    case 'correct':
      return num1 / num2;
      break;
  }
}
console.log("How much time i need to spend this?");

console.log("Am I in the rught way?")