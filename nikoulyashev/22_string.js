function showVerticalMessage(anyWord) {
  let result = "";
  if (anyWord.startsWith("s")) {
    anyWord = anyWord[0].toUpperCase() + anyWord.slice(1); // какой вариант лучше использовать?
    // anyWord = "S" + anyWord.slice(1); 
  }
  if (anyWord.length > 7) {
    anyWord = anyWord.slice(0, 7);
  }
  for (let char of anyWord) {
    result += char + "\n";
  }
  console.log(result);
}

showVerticalMessage("Strada");
showVerticalMessage("Lorem ipsum");

