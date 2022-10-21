const DONE = "Done"
const TODO = "To Do"
const PROGRESS = "In Progress"
let list = {
	"create a new practice task": PROGRESS,
	"make a bed": DONE,
	"write a post": TODO,

    deleteTask(task) {
        delete this[task]
        return this
    },

    addTask(task) {
        this[task] = TODO
        return this
    },

    changeStatus(task, status) {
        this[task] = status
        return this
    },

    showList() {
        console.log(TODO + ':')
        
        for(let key in this) {
            if (this[key] == TODO) {
                console.log(`"` + key + `"`)  
            }
        } 
        console.log(PROGRESS + ':')
        for(let key in this) {
            if (this[key] == PROGRESS) {
                console.log(`"` + key + `"`)  
            }
        }
        console.log(DONE + ':')
        for(let key in this) {
            if (this[key] == DONE) {
                console.log(`"` + key + `"`) 
            }
            
            }
        }
    }



list.addTask("make a programm")
list.deleteTask("write a post")
list.changeStatus("make a programm", PROGRESS)
list.addTask("to sleep")
list.showList()
