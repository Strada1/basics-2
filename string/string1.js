// The first solution
function showVerticalMessage(str) {
  let str2 = "";
  let char = "s";
  for (i = 0; i < str.length && i < 7; i++) {
    if (str[i] === char && i === 0) {
      str2 += `${str[i].toUpperCase()}\n`;
    } else {
      str2 += `${str[i]}\n`;
    }
  }
  console.log(str2);
}

showVerticalMessage("strada");

// showVerticalMessage("representation");
