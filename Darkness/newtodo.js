const list = {
    "create a new practice task": "In Progress",
    "go for a walk": "In Progress",
	"make a bed": "Done",
	"write a post": "To Do"
}

const changeStatus = (task,status) =>{
    if(list.hasOwnProperty(task) && status){
        list[task]=status
        return true
    }
    else{
        return 'error.Unexpected task'
    }
    
}

const addTask = (someNewTask,status='In Progress')=>{
    if(list.hasOwnProperty(someNewTask)){
        return 'error.Task is already in object'
    }
    else{
        list[someNewTask] = status
        return true
    }
    
}
const deleteTask = task =>{
    delete list[task]
    return true
}

const showList = () =>{
    const set = new Set()
    for(let key in list){
        set.add(list[key])
    }
    for(let key of set){
        console.log(`${key}:`)
        for(let key2 in list){
            if(list[key2]===key){
                console.log(`       ${key2}`)
            }
        }
    }
}

showList()
addTask('sleep')
addTask('Eat')
console.log(changeStatus('create a new practice task'))
showList()