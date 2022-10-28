const list = {

    toDoStatus: {
        todo: "to do",
        process: "in process",
        done: "done",
    },

    addTask(a){
        Object.assign(list, {[a]: this.toDoStatus.todo});
    },

    deleteTask(a){
        delete this[a];
    },

    changeStatus(a, b){
            if([b] == this.toDoStatus.done){
                this[a] = this.toDoStatus.done;
            }else if([b] == this.toDoStatus.todo){
                this[a] = this.toDoStatus.todo;
            }else if([b] == this.toDoStatus.process){
                this[a] = this.toDoStatus.process;
            }else{
                console.log('Invalid format');
            }
        // аналог switch у меня почему-то не работает

        // switch([b]){
        //     case this.toDoStatus.todo:
        //         this[a] = toDoStatus.todo;
        //         break;
        //     case this.toDoStatus.process:
        //         this[a] = toDoStatus.process;
        //         break;
        //     case this.toDoStatus.done:
        //         this[a] = toDoStatus.done;
        //         break;
        // }
    },
    showList(){
        console.log('TO DO:');
            for(let i in list){
                if(this[i] == 'to do'){
                    console.log(i)
                }
            }
        console.log('In Process:');
            for(let i in list){
                if(this[i] == 'in process'){
                    console.log(i)
                }
            }
        console.log('Done:');
            for(let i in list){
                if(this[i] == 'done'){
                    console.log(i)
                }
            }
    },
}

list.addTask('go to bed');
list.addTask('go to eat');
list.addTask('take a shower');
list.addTask('take a shower2');
list.addTask('take a shower3');
list.addTask('take a shower4');
list.addTask('бегит');
list.addTask('турник');

list.deleteTask('бегит');
list.deleteTask('турник');

list.changeStatus('go to bed', 'in process');
list.changeStatus('go to eat', 'done');
list.changeStatus('take a shower2', 'in process');
list.changeStatus('take a shower3', 'done');

list.showList();