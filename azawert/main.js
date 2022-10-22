const list = {
  "create a new practice task": "In Progress",
  "make a bed": "Done",
  "write a post": "Done",
};
const statuses = Object.values(list);
const firstStatus = statuses[0];
const secondStatus = statuses[1];
const thirdStatus = statuses[2];
const changeStatus = (todo, status) => {
  if (todo in list) {
    list[todo] = status;
    return list;
  } else {
    return "You need to add ToDo before changing status...";
  }
};
const deleteToDo = (todo) => {
  if (todo in list) {
    delete list[todo];
    return list;
  } else {
    return "You need to add ToDo before deleting it...";
  }
};
const addToDo = (todo, status = "To Do") => {
  if (!(todo in list)) {
    list[todo] = status;
    return list;
  } else {
    return "This ToDo was already added...";
  }
};
const showList = () => {
  showListCreate(secondStatus);
};

const showListCreate = (status) => {
  for (key in list) {
    if (list[key] == status) {
      console.log(`${status}:
      ${key}`);
    }
  }
};
showList();
addToDo("Create to do", "Done");
