// The first way
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

// The second way
/* function showVerticalMessage(str) {
  let str2 = "";
  let char = "s";

  if (str[0] === char) {
    str = str[0].toUpperCase() + str.slice(1);}
  if (str.length > 7) {
    str = str.slice(0, 7);}
  for (let i of str) {
    str2 += i + "\n";}
  console.log(str2);
}
showVerticalMessage("strada"); */
