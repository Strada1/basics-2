function showVerticalMessage(value) {
  if (value[0] === "s") {
    value = "S" + value.slice(1, 7);
  }
  for (let char of value.slice(0, 7)) {
    console.log(char);
  }
}

showVerticalMessage("strada");
