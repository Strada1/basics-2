"use strict"
const statuses = {
    TODO : 'To Do:',
    DONE : 'Done:',
    INPR : 'In Progress:',
}
const priorities = {
    HIGH : 'High',
    MEDIUM : "Medium",
    LOW : 'Low',
}
// const list = {
// 	"create a new practice task": "In Progress:",
// 	"make a bed": "Done:",
// 	"write a post": "To Do:",
// };

const list = [
    {name: 'make a bed', status: 'Done:', priority: "Low"},
    {name: 'write a post', status: 'To Do:', priority: "Medium"},
    {name: 'create a task', status: 'In progress:', priority: "High"},
]

let keys = {
    item1:"",
    item2:"",
    item3:"",

}

function changeStatus(task, newStatus) {
    if (list.find(item => item.name == task) === undefined) {
     console.log(`can't change "${task}" to "${newStatus}" cause there's no such task`);
    } else {
     list.find(item => item.name == task).status = newStatus;
    }
 }

function deleteTask(name){
    let obj = list.map(x => {
        return x.name;
    }).indexOf(name);
    list.splice(obj, 1);
}
function addTask(newTask, prior){
    newTask ={
        name : newTask,
        status: 'To Do:',
        priority: prior,
    }
    if(!newTask) {
        console.log('Введите задачу');
    }
    // list[newTask.status] = 'To Do:';
    list.splice(4, 0, newTask);
}



// function showList(){
//     let str ="";
//     console.log('To Do:');
//     // for(let key in list) {
//     //     if (list[key] == statuses.TODO){
//     //         console.log(`\t"${keys.item1 +=key}"`);
//     //     } else if(keys.item1 === "") {
//     //         console.log(`\t${keys.item1 += "-"}`);
//     //     }
//     // // };
//     list.forEach(function(item) {
//         if(item.status === statuses.TODO) {
//          console.log(str+='\t' + item.name + '\n')
//         } if (!str){ console.log ('-')
//         }
//     else{console.log(str)}});
//     console.log('Done:');
//     // for(let key in list){
//     //     if(list[key] == statuses.DONE){
//     //         console.log(`\t"${keys.item2+=key}"`);
//     //     } else if(keys.item2 === "") {
//     //         console.log(`\t${keys.item2 += "-"}`);
//     //     }
//     // // };
//     list.map(item => {
//         item.status === statuses.DONE ? console.log(str+="\t" + item.name + '\n'): console.log ('Enter')})
//     console.log('In Progress:');
//     // for(let key in list) {
//     //     if (list[key] == statuses.INPR){
//     //         console.log(`\t"${keys.item3+=key}"`);
//     //     } else if(keys.item3 === "") {
//     //         console.log(`\t${keys.item3 += "-"}`);
//     //     }
//     // };
//     list.map(item => {
//         item.status === statuses.INPR ? console.log(str+= item.name + '\n'): console.log ('Enter')})
//     // console.log(`To Do: \n\t"${keys.item1}"\nDone: \n\t"${keys.item2}"\nIn Progress:\n\t"${keys.item3}"`); //не получилось написать

// };
function showCategory(cat) {
    let str="";
    console.log(`${cat}`);
    list.forEach(function(item) {
        if (item.status === cat){
            str+="\t" + item.name +"\n";
        }
    }) 
    if (!str) {
        console.log("\t-");
    } else {console.log(str)}
}
function showList() {
    showCategory(statuses.TODO)
    showCategory(statuses.INPR)
    showCategory(statuses.DONE)
}


deleteTask('make a bed');
addTask('catch sone', priorities.MEDIUM);
changeStatus('write a post', 'Done:');
changeStatus('catch sone', 'Done:');
addTask('make a shower', priorities.HIGH);
addTask('create smth', priorities.LOW);
changeStatus('create smth', 'In Progress:');
deleteTask('create smth');
showList();
console.log(list)






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

// function firstLetter(str){        
//     if (str){
//         return str;
//     } else if (str[0] == "s") {
//         return str[0].toUpperCase() + str.slice(1);
//     }
//     else {
//     return "-"
//     } }
// function theLength(str, maxlength){
//         if (str.length > maxlength){
//             return str.slice(0, maxlength - 1)
//         }
//         else{ return str};
//     }

// function showVerticalMeesage(str){
// firstLetter();
// theLength();
// }
// console.log(showVerticalMeesage('message'));

// function showVerticalMeesage(str){
//     if(str[0] === 's') {
//         return str[0].toUpperCase() + "\n" + str[1] + "\n" + str[2] + "\n" + str[3] + "\n" + str[4] + "\n" + str[5] + "\n" + str[6];
        
//     }
//     else {
//         return str[0] + "\n" + str[1] + "\n" + str[2] + "\n" + str[3] + "\n" + str[4] + "\n" + str[5] + "\n" + str[6];
//     }
// }
// console.log(showVerticalMeesage('sessagedsadasd'));