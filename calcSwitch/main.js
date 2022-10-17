function calc(action, b, c) {
  switch (action) {
    case "add":
      console.log(b + c);
      break;
    case "multi":
      console.log(b * c);
      break;
    case "subtract":
      console.log(b - c);
      break;
  }
}

calc("add", 1, 2);
calc("multi", 1, 2);
calc("subtract", 3, 2);
