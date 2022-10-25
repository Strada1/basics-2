function showVerticalMessage(str) {
  let resultStr = '';
  let verticalStr = '';

  if (str[0] == 's') {
    resultStr = 'S' + str.slice(1)
  } else {
    resultStr = str;
  }

  if (resultStr.length > 7) {
    resultStr = resultStr.slice(0, 7);
  }

  for (let char of resultStr) {
    verticalStr += char + '\n';
  }

  console.log(verticalStr);
}

showVerticalMessage('strada');
showVerticalMessage('stradaaaaaaaaaaaaaaaaaaaaa');
showVerticalMessage('testtesttest');