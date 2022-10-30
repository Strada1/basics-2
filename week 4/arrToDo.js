// Константы
const STATUS = {
    TO_DO: 'To Do',
    IN_PROGRESS: 'In Progress',
    DONE: 'Done', 
}
const HIGH = 'high';
const LOW = 'low';
// Хранилище данных
const list = [
    {
        name: 'create a post',
        status: 'In Progress',
        priority: 'low',
    },
    {
        name: 'read a book',
        status: 'To Do',
        priority: 'medium',
    },
    {
        name: 'training muscles',
        status: 'Done',
        priority: 'high',
    },
]
console.log();

// Смена статуса
function changeStatus(nameTask, stat) {
    list.forEach(element => {
        if (nameTask == element.name) {
            element.status = stat
        }
     });
}

// Смена приоритета
function changePrio(nameTask, prio) {
    list.forEach(element => {
        if (nameTask == element.name) {
            element.priority = prio
        }
     });
}
    
// Добавить задачу
function addTask(name) {
    list.push({name})
}

// Удалить задачу
function deleteTask(nameTask) {
    let index = list.findIndex(item => item.name === nameTask)
    list.splice(index, 1)
}


// Вывод списка дел
function showList() {
    ////////////
    // console.log(TODO + ':');
    // list.forEach(element => {
    //     if (element.status == TODO) {
    //         console.log(`\t ${element.name} \t ${element.priority}`)
    //     }   
    // });
    
    
    // console.log(INPROGRESS + ':');
    // list.forEach(element => {
    //     if (element.status == INPROGRESS) {
    //         console.log(`\t ${element.name} \t ${element.priority}`)
    //     }   
    // });
    


    // console.log(DONE + ':');
    // list.forEach(element => {
    //     if (element.status == DONE) {
    //         console.log(`\t ${element.name} \t ${element.priority}`)
    //     }
    // });
    ////////////

    // let flagINPROGRESS = true;
    // let flagDONE = true;
    // let flagTODO = true;
    
    // console.log(TODO + ':');
    // list.filter(el => {
    //     if(el.status == TODO) {
    //         console.log(`\t${el.name}`)
    //         flagTODO = false
    //     }
    // })
    // if (flagTODO == true) {console.log('-')}

    // console.log(INPROGRESS + ':');
    // list.filter(el => {
    //     if(el.status == INPROGRESS) {
    //         console.log(`\t${el.name}`)
    //         flagINPROGRESS = false
    //     } 
    // })
    // if (flagINPROGRESS == true) {console.log('-')}

    // console.log(DONE + ':');
    // list.filter(el => {
    //     if(el.status == DONE) {
    //         console.log(`\t${el.name}`)
    //         flagDONE = false
    //     } 
    // })
    // if (flagDONE == true) {console.log('-')}

    ////////////////////

    // console.log(TODO + ':');
    // let todo = list.filter(el => el.status == TODO)
    // todo.forEach(el => {
    //     console.log( `\t ${el.name}` )})
    // if (todo.length < 1) { console.log('-') };
    

    // console.log(INPROGRESS + ':');
    // let inprogress = list.filter(el => el.status == INPROGRESS)
    // inprogress.forEach(el => {
    //     console.log( `\t ${el.name}` )})
    // if (inprogress.length < 1) { console.log('-') };
    

    // console.log(DONE + ':');
    // let done = list.filter(el => el.status == DONE)
    // done.forEach(el => {
    //     console.log( `\t ${el.name}` )})
    // if (done.length < 1) { console.log('-') };
    
    ////////////////////

    for (let status in STATUS) {
        console.log(`${STATUS[status]}:`)
        let arr = list.filter(element => 
            element.status === STATUS[status])
        arr.forEach(element => {
            console.log(`\t${element.name}`)});
        if (!arr.length) console.log('\t -')
    }   
}   

addTask('Eat a pizza');
changeStatus('Eat a pizza', STATUS.TO_DO);
changePrio('Eat a pizza', LOW);
deleteTask('create a post');
showList();
// console.log(list)



