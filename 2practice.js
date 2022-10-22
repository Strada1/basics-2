let todolist = {
    "create a new practice task": "in progress",
    "make a bed": "done",
    "write a post": "to do",
    changestatus(){
        let a = prompt("vvedite nazvanie")
        this.a = "done";
        alert(this.a);
    },
    addtask(){
        let c = prompt("nazvanie dela");
        this.c = "to do";
    },
    deletetask(){
        let b = prompt("nazvanie dela");
        delete this.b;
    },
    showlist(){
        console.log("to do:");
        for(key in this){
            if(this[key]=="to do"){
                console.log(`     "${key}"`)
            }
        }
        console.log("in progress:");
        for(key in this){
            if(this[key]=="in progress"){
                console.log(`     "${key}"`);
            }
        }
        console.log("done:");
        for(key in this){
            if(this[key]=="done"){
                console.log(`      "${key}"`);
            }
        }
    },
}
todolist.changestatus();