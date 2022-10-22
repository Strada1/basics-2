let toDo = 'To Do';
let inProgress = 'In Progress';
let done = 'Done';

const list = {
	"create a new practice task": inProgress,
	"make a bed": done,
	"write a post": toDo,
};

function addTask(task) {
  list[task] = toDo;
};

function deleteTask(task) {
  delete list[task];
}

function changeStatus(task, status) {
  list[task] = status;
}

function showList() {
  let toDo1 = '';
  let inProgress1 = '';
  let done1 = '';

  for (key in list) {
    if (list[key] === toDo) {
      toDo1 += `  "${key}", \n`;
    } else if (list[key] === inProgress) {
      inProgress1 += `  "${key}", \n`;
    } else if (list[key] === done) {
      done1 += `  "${key}", \n`;
    }
  }
  if (toDo1 == '') {
    toDo1 = '  -';
  } 
  if (inProgress1 == '') {
    inProgress1 = '  -';
  } 
  if (done1 == '') {
    done1 = '  -';
  }

  console.log(`To Do:\n${toDo1}`);
  console.log(`${inProgress}:\n${inProgress1}`);
  console.log(`${done}:\n${done1}`);
}

addTask('create map');
addTask('Do some work');
deleteTask('make a bed'); 
// changeStatus('write a post', 'Done');
showList();


// console.log(list);
