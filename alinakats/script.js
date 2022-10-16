function сalc(action, a, b) {
    let result;
    switch (action){
      case 'add':
          result = a + b;
          break;
      case 'multi' :
          result = a * b;
          break;
      case 'subtract': 
          result = a - b;
          break;
      default:
          console.log("action is not recognized");
        
      
    }
    return result;
}
сalc('add', 10, 15);
сalc('multi', 10, 2);
сalc('subtract', 18, 9);
  