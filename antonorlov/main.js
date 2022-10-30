function showVerticalMessage(str) {
    if (str[0] === 's') {
        newStr = str[0].toUpperCase() + str.slice(1);
    } 
    if (str.length > 7) {
        newStr = str.slice(0, 7);
    }
    for (let char of newStr) {
        console.log(char);
    }
}
showVerticalMessage('strada');