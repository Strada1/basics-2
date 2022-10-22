const STATUS = {
  TO_DO: 'To Do',
  IN_PROGRESS: 'In Progress',
  DONE: 'Done',
};

const list = {
  'create a new practice task': STATUS.IN_PROGRESS,
  'make a bed': STATUS.DONE,
  'write a post': STATUS.TO_DO,
  'task need': STATUS.TO_DO,
};

function changeStatus(task, status) {
  for (key in list) {
    if (key === task) {
      list[key] = status;
    }
  }
}

// changeStatus('make a bed', STATUS.TO_DO);

function addTask(task) {
  list[task] = STATUS.TO_DO;
}

// addTask('code practice');

function deleteTask(task) {
  delete list[task];
}

// deleteTask('write a post');

function showList() {
  let toDoList = '';
  let inProgressList = '';
  let doneList = '';

  for (let key in list) {
    switch (list[key]) {
      case STATUS.TO_DO:
        toDoList += `\n\t` + `"${key}"`;
        break;
      case STATUS.IN_PROGRESS:
        inProgressList += `\n\t` + `"${key}"`;
        break;
      case STATUS.DONE:
        doneList += `\n\t` + `"${key}"`;
        break;
    }
  }

  if (toDoList == '') {
    console.log(STATUS.TO_DO + ':' + `\n\t` + '-');
  } else {
    console.log(STATUS.TO_DO + ':' + toDoList);
  }

  if (inProgressList == '') {
    console.log(STATUS.IN_PROGRESS + ':' + `\n\t` + '-');
  } else {
    console.log(STATUS.IN_PROGRESS + ':' + inProgressList);
  }

  if (doneList == '') {
    console.log(STATUS.DONE + ':' + `\n\t` + '-');
  } else {
    console.log(STATUS.DONE + ':' + doneList);
  }
}

showList();
