function calcSum(operator, a, b) {
    let result = isNaN(a) ? "не разобрал здесь число" :
                 isNaN(b) ? "не разобрал здесь число" :
                 operator === 'add' ? +a + +b :
                 operator === 'multi' ? a * b :
                 operator === 'subtract' ? a - b :
                 "вообще не рядом"
  
    return result;
  }
  
  console.log(calcSum("add", 1, 2));
  console.log(calcSum("multi", 1, 2));
  console.log(calcSum("subtract", 3, 2));
  console.log(calcSum("", 1, 2));
  console.log(calcSum(null, 1, 2));
  console.log(calcSum(true, 1, 2));
  console.log(calcSum("add", true, 2));
  console.log(calcSum("add", "1", 2));
  console.log(calcSum("multi", 1, "2"));
  console.log(calcSum("subtract", "2", "1"));
  console.log(calcSum("add", null, 2));
  console.log(calcSum("add", undefined, 2));