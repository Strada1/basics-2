function solve(a, b){
    if(a > b){
        return('>')
    } else if(a < b){
        return('<')
    } else if(a == b){
        return('=')
    } 
     return('gg')
  }
  function calc(a, b, method){
    switch(method){
      case '+' :
        return(a + b);
        break;
      case '-' :
        return(a - b);
        break;
      case '*' :
        return(a * b);
        break;
      case '/' :
        return(a / b);
        break;
      case '=?':
        return(`${a} ${solve(a, b)} ${b}`);
        break;
    default:
      return('gg')
      break;
  }
  console.log('yaebaleto');
  
  }function goCalc(){
    let c = prompt('Введи число', '')
    let g = prompt('Введи число', '')
    let work = prompt('Введи дію', '')
    alert(calc(c, g, work))
  
  }
  goCalc()
  console.log('ggbo14')