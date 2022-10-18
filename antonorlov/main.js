const ADD = 'add'
const MULTI = 'multi'
const SUBRTACT = 'subtract'

function calc(ident, a, b) {
    
  if (a !== Number(a) || b !== Number(b)) {
    return 'Вы вводите строку, уважаемый'
  }

  switch (ident) {
    case ADD:
      return a + b;
    case MULTI:
      return a * b;
    case SUBRTACT:
      return a - b;
  }
};

console.log(calc('add', 1, 2));
console.log(calc('multi', 1, 2));
console.log(calc('subtract', 3, 2));