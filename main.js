function showVerticalMessage(str) {
  let verticalStr = '';

  if (str.startsWith('s')) {
    str = 'S' + str.slice(1)
  }

  if (str.length > 7) {
    str = str.slice(0, 7);
  }

  for (let char of str) {
    verticalStr += char + '\n';
  }
  console.log(verticalStr);
}

showVerticalMessage('strada');
showVerticalMessage('stradaaaaaaaaaaaaaaaaaaaaa');
showVerticalMessage('testtesttest');