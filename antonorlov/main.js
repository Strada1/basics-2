const OPERATIONS = {
  ADD: '+',
  MULTI: '*',
  SUBTRACT: '-',
};

function calc(ident, a, b) { 
  if (a !== Number(a) || b !== Number(b)) {
    return 'Вы вводите строку, уважаемый'
  }

  switch (ident) {
    case OPERATIONS.ADD:
      return Number(a) + Number(b);
    case OPERATIONS.MULTI:
      return a * b;
    case OPERATIONS.SUBTRACT:
      return a - b;
  }
};

console.log(calc(OPERATIONS.ADD, 1, 2));
console.log(calc(OPERATIONS.MULTI, 1, 2));
console.log(calc(OPERATIONS.SUBTRACT, 3, 2));