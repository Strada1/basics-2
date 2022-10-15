function calcsolver(a,b,action){
    switch(action){
        case "add":
            return a+b;
            break;
        case "sub":
            return a-b;
            break;
        case "multip":
            return a*b;
            break;
    }
}
a = +prompt("vvedite 1 argument");
b = +prompt("vvedire 2 argument");
c = prompt("action");
res = calcsolver(a,b,c);
alert(res);