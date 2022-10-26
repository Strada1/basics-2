function showVerticalMessage(anyWord) {
  let result = "";
  if (anyWord.startsWith("s")) {
    anyWord = anyWord[0].toUpperCase() + anyWord.slice(1);
  }

  for (let char of anyWord.slice(0, 7)) {
    result += char + "\n";
  }
  console.log(result);
}

showVerticalMessage("strada");
showVerticalMessage("lorem ipsum");
showVerticalMessage("загадочное слово");