const todo = {
    list: {},
    status: [
        'Todo',
        'In Progress',
        'Done',
    ],
    changeStatus(key, status){
        this.list[key] = status;
    },
    addTask(key){
        this.list[key] = 'Todo';
    },
    deleteTask(key){
        delete this.list[key]

    },
    print(){

      for( let s in this.status ){
          let count = 0;
          console.log(this.status[s] + ':');
          for(let l in this.list){
              if(this.list[l] == this.status[s]) {
                  console.log(`    -> "${l}",`);
                  count++;
              }

          }
          if(!count) console.log(`    --,`);
      }
        console.log('----------------------------')
    }
}

todo.addTask('Test0');
todo.addTask('Test1');
todo.addTask('Test2');
todo.changeStatus('Test0', 'In Progress');
todo.changeStatus('Test1', 'Done');
todo.print();
todo.deleteTask('Test2');
todo.addTask('Test3');
todo.addTask('Test4');
todo.addTask('Test5');
todo.addTask('Test6');
todo.print();
todo.deleteTask('Test1');
todo.print();


