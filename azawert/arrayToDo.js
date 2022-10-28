const STATUS = {
  IN_PROGRESS: "In Progress",
  DONE: "Done",
  TO_DO: "To Do",
};
const ERRORS = {
  NOT_FOUND: "Данной задачи нет в списке",
  TASK_ALREADY_IN_LIST: "Задача с таким названием уже в списке",
  NO_TASK_NAME: "Задайте задаче имя",
  FAILED_TO_UPDATE: "Не удалось обновить статус задачи",
};
const PRIORITY = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
};
const SUCCESS = {
  SUCCESS_MESSAGE_ON_ADDING: "Задача успешно добавлена",
  SUCCESS_MESSAGE_ON_DELETING: "Задача успешно удалена",
  SUCCESS_MESSAGE_ON_UPDATING: "Статус задачи успешно обновлен",
};

const list = [
  { name: "create a post", status: "In Progress", priority: "low" },
  { name: "test", status: "Done", priority: "high" },
];

const addToDo = (name) => {
  const isToDoExisting = list.find(
    (el) => el.name.toLowerCase() === name.toLowerCase()
  );
  if (isToDoExisting) return ERRORS.TASK_ALREADY_IN_LIST;
  if (!isToDoExisting) {
    list.push({ name, status: STATUS.TO_DO, priority: PRIORITY.LOW });
  }
  return SUCCESS.SUCCESS_MESSAGE_ON_ADDING;
};
const deleteToDo = (name) => {
  if (!name) return ERRORS.NO_TASK_NAME;

  const existing = list.some((el, i) => {
    if (el.name.toLowerCase() === name.toLowerCase()) {
      list.splice(i, 1);
      return true;
    }
  });
  if (!existing) return ERRORS.NOT_FOUND;
  if (existing) return SUCCESS.SUCCESS_MESSAGE_ON_DELETING;
};
const changeStatus = (obj) => {
  if (!obj) return ERRORS.NO_TASK_NAME;
  const updated = list.map((el) => {
    if (el.status === obj.status) return false;
    return el.name.toLowerCase() === obj.name.toLowerCase()
      ? (el.status = obj.status)
      : false;
  });

  return updated.every((el) => el === false)
    ? ERRORS.FAILED_TO_UPDATE
    : SUCCESS.SUCCESS_MESSAGE_ON_UPDATING;
};
const showList = () => {
  let str = "";

  for (let key in STATUS) {
    str += `${STATUS[key]}:\n`;

    list.map((el) => {
      if (el.status === STATUS[key]) {
        return (str += `${el.name}\n`);
      }
    });
  }
  return str;
};

console.log(addToDo("create a social network"));

console.log(addToDo("create a workout"));
console.log(addToDo("watch tv"));
console.log(changeStatus({ name: "watch tv", status: STATUS.IN_PROGRESS }));
console.log(changeStatus({ name: "create a workout", status: STATUS.DONE }));
console.log(showList());
console.log(list);
