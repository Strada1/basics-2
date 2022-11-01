function showVerticalMessage (str) {
    str = str.slice(0, 7);
    
    if (str[0] === 's') {
        str = str[0].toUpperCase() + str.slice(1)
    };

    let i = 0;
    while (i < str.length) {
        console.log(`${str[i]}\n`);
        i++;
    }
};

showVerticalMessage('bonk');