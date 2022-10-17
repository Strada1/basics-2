function calc(value, a, b){
    if(value === 'add'){
        return a + b
    }
    if(value === 'multi'){
        return a * b
    }
    if(value === 'subtract'){
        return a - b
    }
}
console.log(calc(add, 1, 2))