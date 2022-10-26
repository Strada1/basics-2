function showVerticalMessage(inputValueVMessage) {
    let errorInput = inputValueVMessage;
    const ERROR_MESSAGE = "Совершена ошибка при вводе, введите другое слово.";
    
    if (typeof(errorInput) != "string") {
        return console.log(ERROR_MESSAGE);
    } else if (errorInput.trim() == '') {
        return console.log(ERROR_MESSAGE);
    } else if (errorInput === '0') {
        return console.log(ERROR_MESSAGE);

    }
   
    const propertyValue = {
        BIG_FIRST: inputValueVMessage[0].toUpperCase(),
        LOW_FIRST: inputValueVMessage[0].toLowerCase(),
        STANDART_FIRST: inputValueVMessage[0],
        LENGTH_TEXT: inputValueVMessage.lenght,
        SLICE_TEXT_END: inputValueVMessage.slice(1, 7),
        SLICE_TEXT_FULL: inputValueVMessage.slice(0, 7),
        RETURN_BACK: inputValueVMessage,
    };

    if (propertyValue.LENGTH_TEXT > 7) {
        inputValueVMessage = propertyValue.BIG_FIRST + propertyValue.SLICE_TEXT_END;
        } else if (propertyValue.LENGTH_TEXT === 0) {
        console.log(ERROR_MESSAGE);
    } else {
        inputValueVMessage = propertyValue.BIG_FIRST + propertyValue.SLICE_TEXT_END;
    }

    for (let char of inputValueVMessage) {
        console.log(char);
      }

 
}

showVerticalMessage('strada');
