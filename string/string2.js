// The second solution
function showVerticalMessage(str) {
  let str2 = "";
  let char = "s";

  if (str[0] === char) {
    str = str[0].toUpperCase() + str.slice(1);
  }
  if (str.length > 7) {
    str = str.slice(0, 7);
  }
  for (let i of str) {
    str2 += i + "\n";
  }
  console.log(str2);
}
showVerticalMessage("strada");

// showVerticalMessage("representation");
