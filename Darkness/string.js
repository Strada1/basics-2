const showVerticalMessage = string =>{

  string=string[0]==='s'?'S'+string.slice(1,7):string.slice(0,7)
  for(let str of string){
    console.log(str)
  }
  
  
}
showVerticalMessage('bookingmachine')
