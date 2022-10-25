function showVerticalMessage(str) {
  if (str[0] === "s") {
    str = str[0].toUpperCase() + str.slice(1);
  }
  for (let letter in str) {
    if (letter > 6) break;
    console.log(str[letter]);
  }
}
showVerticalMessage("strada");
