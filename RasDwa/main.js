function calc(a, b, c) {
  if (a == "add") {
    console.log(b + c);
  } else if (a == "multi") {
    console.log(b * c);
  } else if (a == "subtract") {
    console.log(b - c);
  }
}

function calcSwitch(a, b, c) {
  switch (a) {
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

calcSwitch("add", 1, 2);
calcSwitch("multi", 1, 2);
calcSwitch("subtract", 3, 2);
