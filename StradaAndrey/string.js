function showVerticalMessage(str , maxLength){
   strLowerCase = str.toLowerCase()
   if(strLowerCase.length > maxLength){
       strLowerCase = strLowerCase.slice(0 , maxLength - 1 )
   }

   if (strLowerCase.startsWith('s')){
      strLowerCase = strLowerCase[0].toUpperCase() + strLowerCase.slice(1)
   }

   for (let char of strLowerCase){
      console.log(char)
   }
}
showVerticalMessage('strada_is_the best of the best', 7)