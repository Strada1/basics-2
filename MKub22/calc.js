'use strict'
const operations = {
    add:"+",
    multi:"*",
    substract:"-",
    division:'/',
}    

let x = document.getElementById('number1');
let n = document.getElementById('number2');
let res = document.getElementById('result');
let oper = document.querySelector('select');
// let getNum = document.getElementById('getRes');

import {sum,substract,multi,division, getNum} from './module.js' 
res.addEventListener('click', function(){
    if ((x.value !== " " && n.value !== " ") || (x.value == String || n.value == String)) {
        switch (oper.value){
                case operations.add:
                    sum(x,n);
                break;
                case operations.substract:
                    substract(x,n)
                break;
                case operations.multi:
                    multi(x,n);
                break;
                case operations.division:
                    division(x,n)
                break;
                default:
                    alert("А что вам надо?");
        }
        let div = document.createElement('div');
        div.className = 'div';
        div.innerHTML = getNum.innerHTML;
        document.body.append(div);
        div.addEventListener('click', function(){
            this.remove();
        })
        }
        else{
            alert('Это не число'); 
        }
        
})




