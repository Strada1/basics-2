let single = 'single-qouted';
let double = "double-quoted";
let backticks = `backticks`;

function sum (firstPerem, secondPerem){
return firstPerem + secondPerem;
}

// console.log(`1 + 2 = ${sum(1,2)}`);


function ucFirst(str) {
    return (str.toUpperCase());
}
//console.log(ucFirst('вася'));

function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes ('viagra')||lowerStr.includes('xxx');

}

function truncate (str, maxlength) {
    if (str.length >= maxlength) {
        let newStr ='';
        for (i = 0; i <= maxlength; i++) {
            newStr += str[i];
        } 
        console.log(newStr + `...`);
    } else {
        console.log(str);
    }
}

// truncate('four seasons', 20);
// console.log(checkSpam('buy ViAgRA now'));
// // console.log(checkSpam('free xxx'));
// // console.log(checkSpam('innocent rabbit'))

function showVerticalMessage(message) {
    let limit = 7;
    let firstSymbol = message.slice(0,1);
    let newMessage;
    if ( firstSymbol = 's') {
        console.log('S');
        newMessage = message.slice(1);
        for (let char of newMessage) {
            console.log(char);
        }
    } else {
        for (let symbols of message) {
            console.log(symbols)
        }
    }
}

function sd(word) {
    let limit = 7;
    let newWord;
    let length = word.length;
    if (length <= limit) {
        if (word[0]= 's') {
            console.log('S');
            for (let char of word.slice(1)) {
                console.log(char);
            }
        } else {
            for (let char of word) {
                console.log(char);
            }
        }
    } else {
        newWord = word.slice (0,7);
        if (newWord[0]= 's') {
            console.log('S');
            for (let char of newWord.slice(1)) {
                console.log(char);
            }
        } else {
            for (let char of newWord) {
                console.log(char);
            }
        }
        
    }

}


sd('s234567');

// showVerticalMessage('strada')