export const STATUS = {
  IN_PROGRESS: "In Progress",
  DONE: "Done",
};
export const PRIORITY = {
  HIGH: "high",
  LOW: "low",
};

export let list = [
  {
    name: `Вот вам и супер интересная тема.Вы наверняка заметили что ваши файлы с кодом становятся все объемнее, что хочется вынести некоторые вещи куда-то за пределы основной программы.`,
    priority: PRIORITY.HIGH,
    status: STATUS.IN_PROGRESS,
  },
  {
    name: "Сверстать этот TODO list",
    priority: PRIORITY.HIGH,
    status: STATUS.IN_PROGRESS,
  },
  {
    name: "Начать делать задачу",
    priority: PRIORITY.HIGH,
    status: STATUS.DONE,
  },
  {
    name: "Посмотреть ютубчик",
    priority: PRIORITY.LOW,
    status: STATUS.IN_PROGRESS,
  },
];

export const addTask = (task) => {
  list = [...list, task];
};

export const changeStatus = (taskName) => {
  const result = list.filter((task) => task.name === taskName);

  for (let task of result) {
    task.status =
      task.status === STATUS.IN_PROGRESS
        ? STATUS.DONE
        : task.status === STATUS.DONE
        ? STATUS.IN_PROGRESS
        : null;
  }
  console.log(list);
};

export const removeTask = (taskName) => {
  list = list.filter((el) => !(el.name === taskName));
  console.log(list);
};
