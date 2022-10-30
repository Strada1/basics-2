

const STATUS = {
    DONE: 'Done',
    IN_PROGRESS: 'In progress',
    TODO: 'To do',
};
const PRIORITY = {
    MIDI: 'midi',
    MAXI: 'maxi',
    MINI: 'mini', 
};
const list = [ { name: 'create a new practice task', status: STATUS.IN_PROGRESS, priority:PRIORITY.MIDI},
                 { name: 'make a bed', status: STATUS.DONE, priority: PRIORITY.MAXI  },
                { name: 'write a post', status:STATUS.TODO, priority: PRIORITY.MINI}, ];

showList();
 function addTask(task) {
    list.push({name:task,status:STATUS.TODO,priority:PRIORITY.MAXI});
 }
 addTask('have a walk');
 addTask('go to the cinema');


 function changeStatus(task, stat) {
    let nameTask = list.findIndex((item) => item.name === task);
    list[nameTask].status = stat;
  }
changeStatus("go to the cinema", "Done");
changeStatus("have a walk", "Done");


function deleteTask(task) {
    let nameTask = list.findIndex((item) => item.name === task);
    list.splice(nameTask, 1);
  }

function showList() {
    console.log('Done:');
    list.filter((item) => item.status == STATUS.DONE).forEach((item) => {
        console.log(`     "${item.name}"` );
    })
    console.log('To do:');
    list.filter((item) => item.status == STATUS.TODO).forEach((item) => {
        console.log(`     "${item.name}"` );
   })
    console.log('In progress:');
    list.filter((item) => item.status == STATUS.IN_PROGRESS).forEach((item) => {
        console.log(`     "${item.name}"` );
  }) 

};
showList();
