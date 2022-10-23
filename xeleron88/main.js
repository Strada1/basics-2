const list = {
  'create a new practice task': 'In Progress',
  'make a bed': 'Done',
  'write a post': 'To Do',
};

function changeStatus(key, status) {
  list[key] = status;
}

function addTask(key, status = 'To Do') {
  list[key] = status;
}

function deleteTask(key) {
  delete list[key];
}

function searchInList(value) {
  let result = '';
  console.log(value);
  for (const key in list) {
    if (list[key] === value) {
      result = `${result}\t${key}\n `;
    }
  }
  if (result === '') {
    result = '-';
  }
  console.log(result);
}

function showList() {
  searchInList('To Do');
  searchInList('In Progress');
  searchInList('Done');
  searchInList('Test');
}

addTask('new task');
addTask('new task2');
addTask('new task3');
addTask('new task4');
changeStatus('new task3', 'In Progress');
changeStatus('new task4', 'Done');
changeStatus('new task', 'Done');
deleteTask('make a bed');

showList();
