const result = document.body.querySelector(".result");

document.body.querySelector('button').addEventListener('click', function calc(){
    let a = +document.body.querySelector('.number1').value;
    let b = +document.body.querySelector('.number2').value;
    let operators = document.body.querySelector('.operators').value;
    if (isNaN(a)||isNaN(b)){
        alert("Вы ввели не числа");
    };
    let total;
    switch (operators) {
        case '*' :
            total = a * b;
            result.textContent = total;
            break;
        case '+':
            total = a + b;
            result.textContent = total;
            break;
        case '-':
            total = a - b;
            result.textContent = total;
            break;
        case '/':
            total = a / b;
            if (b == "0"){
                result.textContent = "На ноль делить нельзя!";
            } else {result.textContent = total;}
            break;
   };
   showResList();
});

// document.body.querySelector('button').addEventListener('click', 
function showResList() {
    let div = document.createElement('div')
    div.className = "outputRes"
    div.innerHTML = result.textContent;
    document.body.querySelector('.resList').append(div);
    div.onclick = function() {
        div.remove();
    }
};



