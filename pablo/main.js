const operations = {
  add: `+`,
  multi: `*`,
  subtract: `-`,
};

function calc(action, a, b) {
  if(isNaN(a) || isNaN(b)) {
    return console.log('Не число');
  }
    switch (action) {
      case operations.add:
        return console.log(a + b);
      case operations.multi:
        return console.log(a * b);
      case operations.subtract:
        return console.log(a - b);
    }
}

calc(operations.subtract, 3, 2);
calc(operations.multi, 1, 2);
calc(operations.add, 1, 2);
