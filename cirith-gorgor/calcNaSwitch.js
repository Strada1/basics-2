function calculate(done, x, y) {
  switch (done) {
    case "add":
      return x + y;
      break;
  }
  switch (done) {
    case "subtract":
      return x - y;
      break;
  }
  switch (done) {
    case "multi":
      return x * y;
      break;
  }
  switch (done) {
    case "letsgo":
      return x ** y;
      break;
  }
}
console.log(calculate("add", 2, 3)); //5
console.log(calculate("multi", 6, 8)); //48
console.log(calculate("subtract", 16, 8)); //8
console.log(calculate("letsgo", 5, 3)); //125
