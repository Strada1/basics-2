
function calc (operation, number1, number2) {
    switch (operation){
        case "add" : return number1+number2;
         break;
        case "multi" : return number1*number2;
         break;
        case "subtruct" : return number1-number2;
         default : alert ("Вы ввели неверное значение");
         break;
    }
}

alert (calc("add", 5,5));
alert (calc("multi", 10,2));
alert (calc("subtruct", 31,1));
alert (calc("ABC, 12, 12"));