function pow(x, n) {
    let c = x ** n;
    return c; 
} 

let x = prompt('Введите число x ...');
let n = prompt('Введите степерь n ...');

if (x <= 0 || n <= 0) {
    alert('Можно вводить только натуральные значения !!!');
}    else {
        alert(pow (x, n))
    }

