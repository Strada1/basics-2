function showVerticalMessage(inputValueVMessage) {
    const propertyValue = {
        BIG_FIRST: inputValueVMessage[0].toUpperCase(),
        LOW_FIRST: inputValueVMessage[0].toLowerCase(),
        STANDART_FIRST: inputValueVMessage[0],
        SLICE_TEXT: inputValueVMessage.slice(0, 7)
    };

   
    if (inputValueVMessage[0] == propertyValue.LOW_FIRST) {
        console.log(propertyValue.BIG_FIRST);
    } else {
        console.log(propertyValue.STANDART_FIRST);
    }

    if (inputValueVMessage.length > 7) {
    inputValueVMessage = propertyValue.SLICE_TEXT;
    }
    

    let i = 1;
    while (i < 7) { 
        console.log(inputValueVMessage[i].toLowerCase());
      i++;
    }
 
};


showVerticalMessage('Stradaite');
showVerticalMessage('strada');
showVerticalMessage('Dantistsr23');
// showVerticalMessage('0');
// showVerticalMessage('');
// showVerticalMessage(' ');
// showVerticalMessage(12345678);
// showVerticalMessage();
// Первая мысль. Циклом выводить каждую букву. Цикл проверяет наличие и выводит.
