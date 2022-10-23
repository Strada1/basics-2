"use strict"
const TODO = 'To Do:';
const DONE = 'Done:';
const INPR = 'In Progress:';

const list = {
	"create a new practice task": "In Progress:",
	"make a bed": "Done:",
	"write a post": "To Do:",
};

function changeStatus(task, status){
    if (task in list) {
        list[task] = status;
}    
};

function addTask(newTask){
    list[newTask] = TODO;
}

function deleteTask(task){
    if(task in list) {
        delete list[task];
    }

};

function showList(){
    console.log(TODO);
    for(let key in list) {
        if (list[key] == TODO){
            console.log(`\t"${key}"`);
        }
    }
    console.log(DONE);
    for(let key in list){
        if(list[key] == DONE){
            console.log(`\t"${key}"`);
        }
    }
    console.log(INPR);
    for(let key in list) {
        if (list[key] == INPR){
            console.log(`\t"${key}"`);
        }
    }
}

deleteTask('make a bed');
addTask('catch sone');
changeStatus('write a post', DONE);
changeStatus('catch sone', DONE);
showList();






// let x = +prompt('x?', '');
// let n = +prompt('n?','');
 
// function add(x,n){
//     return x + n;
// }
// function multi(x,n){
//     return x * n;
// }
// function substract(x,n){
//     return x - n;
// }
// if (!isNaN(x) && !isNaN(n)) {
// switch (prompt('+,- или *')){
//         case "+":
//             function calc(x, n, func){
//             const result = func(x,n);
//             return result;
//             }        
//             alert(calc(+x,+n, add));
//         break;
//         case "-":
//              alert(calc(+x,+n, substract));
//         break;
//         case "*":
//              alert(calc(+x,+n, multi));
//             break;
//             default:
//                 alert("А что вам надо?");
// }
// }
// else{
//     alert('Это не число'); 
// }