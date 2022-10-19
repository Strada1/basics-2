function Calc(action, a, b) {
    let operations = {
      substruct: a - b,
      add: a + b,
      multi: a * b,
    };
    if (action in operations) {
      if (typeof a == "number" && typeof b == "number") {
        return operations[action];
      } else {
        return "error";
      }
    } else {
      return "unknown operation";
    }
  }
  console.log(Calc("multi", 5, -2));
  console.log(Calc("substruct", 5, -2));
  console.log(Calc("add", 5, 5));
  console.log(Calc("marafon", 5, -2));
  console.log(Calc("multi", "dg", -2));
  console.log(Calc("multi", 5));