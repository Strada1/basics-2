// Меняем регистр первой буквы

function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("вася")); // Вася

// Проверка на спам в строке

function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx')
}

console.log(checkSpam(' xx1213 xvsdfsd'))

// Режем строку

function truncate(str, maxlength ) {
    if (str.length > maxlength) {
        str = str.slice(0, maxlength) +'...'
        return str
    }
}

console.log(truncate('Собака съела товар, теперь она наркоман.', 12))