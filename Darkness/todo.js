const list = {
    "create a new practice task": "In Progress",
    "go for a walk": "In Progress",
	"make a bed": "Done",
	"write a post": "To Do",
    changeStatus(task,status){
        if(this.hasOwnProperty(task)){
            this[task]=status
            return true
        }
        else{
            return 'error.Unexpected task'
        }
        
    },
    addTask(someNewTask,status='In Progress'){
        if(this.hasOwnProperty(someNewTask)){
            return 'error.Task is already in object'
        }
        else{
            this[someNewTask] = status
            return true
        }
        
    },
    deleteTask(task){
        delete this[task]
    },
    showList(){
       const set = new Set()
        
       for(let key in this){
        if(typeof this[key] !=='function'){
            set.add(this[key])
        }
       }
        for(let key of set){
            console.log(`${key}:`)
            for(let key2 in this){
                if(this[key2]===key){
                    console.log(`          ${key2}`)
                }
            }
        }
        return true
    }
    
}


