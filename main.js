
function showVerticalMessage(str){
    if (typeof str != 'string') {
        console.log('Variable is not a string');
        return;
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


showVerticalMessage("sHello world");