const list = {
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
    changeStatus(task, status){
        this[task] = status;
    },
    addTask(task){
        this[task] = "To Do";
    },
    deleteTask(task){
        delete this[task];
    },
    showList(){
        let toDoStr = "";
        let progressStr = "";
        let doneStr = "";
        for (let key in this) {
            switch (this[key]) {
                case "To Do":
                    toDoStr = ((toDoStr !== "") ? (toDoStr + ", ") : toDoStr) + key;
                    break;
                case "In Progress":
                    progressStr = ((progressStr !== "") ? (progressStr + ", ") : progressStr) + key;
                    break;
                case "Done":
                    doneStr = ((doneStr !== "") ? (doneStr + ", ") : doneStr) + key;
                    break;
            }
        }
        console.log(`
        To Do: ${(toDoStr !== "") ? toDoStr : "-"}
        In Progress: ${(progressStr !== "") ? progressStr : "-"}
        Done: ${(doneStr !== "") ? doneStr : "-"}
        `);
    }
}
list.showList();
list.changeStatus("write a post", "Done");
list.addTask('have a walk');
list.showList();
list.deleteTask('have a walk');
list.showList();