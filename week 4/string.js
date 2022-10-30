function showVerticalMessage(str) {
  
    if (str[0] == 's' ) {
      str = str[0].toUpperCase() + str.slice(1)};
      for (let i = 0; i < 7 && i < str.length; i++)
      console.log(str[i]);
    
  }
  
  showVerticalMessage('a1234567')
  
  