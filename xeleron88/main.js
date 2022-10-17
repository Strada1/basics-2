for (let i = 1; i < 20; i += 1) {
  console.log(i)
}

const calc = (action, a, b) => {
  let result;
  switch (action) {
    case 'add':
      result = a + b;
      break;
    case 'multi':
      result = a * b;
      break;
    case 'substract':
      result = a - b;
      break;
    default:
      result = 'Error';
  }
  return result;
};