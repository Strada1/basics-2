function calc(ident, a, b) {
    
  if (a !== Number(a) || b !== Number(b)) {
    return 'Вы вводите строку, уважаемый'
  }

  switch (ident) {
    case 'add':
      return a + b;
    case 'multi':
      return a * b;
    case 'subtract':
      return a - b;
  }
};

console.log(calc('add', 1, 2));
console.log(calc('multi', 1, 2));
console.log(calc('subtract', 3, 2));