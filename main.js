
function showVerticalMessage(str, len) {
    let lowerStr = str.toLowerCase();
    lowerStr = lowerStr.trim();
 
    if(lowerStr.startsWith('s')) {
        lowerStr = lowerStr[0].toUpperCase() + lowerStr.slice(1);
    }
    if(lowerStr.length > len){
        lowerStr = lowerStr.slice(0, len);
    }
    for(let char of lowerStr){
        console.log(char);
    }
}
  showVerticalMessage('   stRadauser  ', 6);


