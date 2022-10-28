
function showVerticalMessage(str){
    if (typeof str === 'string') {
        console.log('Variable is a string');
    }
    if (str[0]=='s'){
        console.log('S');
    }else{
        console.log(str[0]);
}
    for (let i = 1; i < 7; i++){
        console.log(str[i]);    
}
}


showVerticalMessage('shello world');