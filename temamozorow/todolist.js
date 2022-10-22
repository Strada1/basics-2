const statuses = {
    "To Do": "To Do",
    "Done": "Done",
    "In Progress": "In Progress"

}

const list = {
    "create a new practice task": "In Progress",
	"make a bed": "Done",
	"write a post": "To Do"
}

function changeStatus(task, status = "To Do"){
    if(task in list && status in statuses){
        list[task] = statuses[status]
    }
}
function addTask(task, status = "To Do"){
    if(!(task in list) && status in statuses){
        list[task] = status
    }
}
function deleteTask(task){
    if(task in list){
        delete list[task]
    }
}

function ShowList(){
    console.log(statuses["To Do"])
    for(key in list){
        if(list[key] == statuses["To Do"]){
            console.log("    " + key)
        }
    }

        console.log(statuses["In Progress"])
    for(key in list){
        if(list[key] == statuses["In Progress"]){
            console.log("    " + key)
        }
    }
    
        console.log(statuses["Done"])
        for(key in list){
            if(list[key] == statuses["Done"]){
                console.log("    " + key)
            }
        }
    }
addTask("Попукать")
changeStatus("Попукать", "Done" )
deleteTask("make a bed")
ShowList()