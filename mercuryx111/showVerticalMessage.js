function showVerticalMessage(messsageStr){
    console.log(`\n`)
    if (messsageStr.length <= 7 ){
        if (messsageStr[0] == 's' ){
            console.log('S\n');
            for (let i = 1; i < messsageStr.length; i++){
                console.log(`${messsageStr[i]}\n`)
            }
        }
        else {
            for (let i = 0; i < messsageStr.length; i++){
                console.log(`${messsageStr[i]}\n`)
            }
        }
    }
    else{
        if (messsageStr[0] == 's' ){
            console.log('S\n');
            for (let i = 1; i < 8; i++){
                console.log(`${messsageStr[i]}\n`)
            }
        }
        else {
            for (let i = 0; i < 8; i++){
                console.log(`${messsageStr[i]}\n`)
            }
        }
    }        
}
showVerticalMessage('sheeeeesh')
showVerticalMessage('qwerty')