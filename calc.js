function calc (x,a,b){
    if(x=='add'){
        console.log(a+b)
    } else if(x=='multi'){
        console.log(a*b)

    }else if(x=='subtract'){
        console.log(a-b)
    }
}
 
calc('add', 1, 2) 
calc('multi', 1, 2) 
calc('subtract', 3, 2) 
