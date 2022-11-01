//Сделать первый символ заглавным

function ucFirst (word) {
    word = word[0].toUpperCase() + word.slice(1)
    return word;
};

console.log(ucFirst('база'));

//Проверка на спам

function checkSpam (str) {
    str = str.toLowerCase();

    if (str.indexOf('viagra') > -1 || str.indexOf('xxx') > -1) {
        return true
    } else {
        return false
    }
};

//Усечение строки

function truncate (str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + '…'
    } else {
        return str
    }
};

//Выделить число

function extractCurrencyValue (str) {
    return parseInt(str)
};

