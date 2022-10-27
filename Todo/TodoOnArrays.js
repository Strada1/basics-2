let arr_Todo = ['Do something now' , 'ada', 'nu']
let arr_InProgress = ['Do something now', 'Do tomorrow', 'nu']
let arr_Done = ['This done', 'yas']
let arrays = [arr_Todo,arr_Done,arr_InProgress]

const addTask = (item) => {
    arr_Todo.push(item)
    return arr_Todo
}

const deleteTask = (item) => {

   arrays.forEach((element) => {
        while (element.indexOf(item) !== -1) {
            element.splice(element.indexOf(item), 1)
        }
    })
    return arrays
}


const changeStatus = (item,newItem) => {
    arrays.forEach((element) => {
        while (element.indexOf(item) !== -1) {
            element.splice(element.indexOf(item), 1, newItem)
        }
    })
    return arrays
}

const showList = () => {
    let newArr_Todo = arr_Todo.join(',\n',)
    let newArr_InProgress = arr_InProgress.join(',\n',)
    let newArr_Done = arr_Done.join(',\n',)

    console.log('ToDo: \n' + `${newArr_Todo}. \n \n` +
        'In Progress: \n' + `${newArr_InProgress}. \n \n` +
        'Done: \n' + `${newArr_Done}. \n \n`)

}

//addTask('')
//deleteTask('Do something now')
//console.log(changeStatus('nu','Здарова'))
showList()



