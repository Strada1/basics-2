const calc = (operation, a, b) => {
  switch (operation) {
    case "add":
      console.log(a + b);
      break;
    case "multi":
      console.log(a * b);
      break;
    case "subtract":
      console.log(a - b);
      break;
  }
};

calc("add", 1, 3);
calc("multi", 1, 3);
calc("subtract", 4, 3);

// if (operation === "add") {
//   console.log(a + b);
// } else if (operation === "multi") {
//   console.log(a * b);
// } else if (operation === "subtract") {
//   console.log(a - b);
// }
