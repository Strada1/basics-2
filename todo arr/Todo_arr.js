let list = [
  { name: "create", status: "In progress", priority: "low" },
  { name: "test", status: "Done", priority: "high" },
  { name: "make", status: "To Do", priority: "medium" },
  { name: "shop", status: "To Do", priority: "low" },
];

const STATUS = {
  IN_PROGRESS: "In progress",
  TO_DO: "To Do",
  DONE: "Done",
};

const PRIORITY = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
};

const changeStatus = (val, newStatus) => {
  list = list.map((el) =>
    el.name === val ? { ...el, status: newStatus } : el
  );
};

const deleteTask = (val) => {
  list = list.filter((el) => el.name !== val);
};

const addTask = (val) => {
  list = [
    ...list,
    {
      name: val,
      status: STATUS.TO_DO,
      priority: PRIORITY.MEDIUM,
    },
  ];
};

const showList = () => {
  for (let key in STATUS) {
    const arr = list.filter((el) => el.status === STATUS[key]);
    console.log(`${STATUS[key]}:`);
    arr.length > 0
      ? arr.forEach((el) => console.log(`\t${el.name}`))
      : console.log("\t -");
  }
};
changeStatus("shop", STATUS.IN_PROGRESS);
deleteTask("make");
deleteTask("test");
addTask("strada");
showList();
