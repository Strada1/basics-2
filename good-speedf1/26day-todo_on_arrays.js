// function sumInput() {
// 	let numbers = [];

// 	while (true) {
// 		let value = prompt('введите число', 0)
// 		if (value === '' || value === null || !isFinite(value)) {
// 			break;
// 		}
// 		numbers.push(+value);
// 	}
// 	let sum = 0;
// 	for (const number of numbers) {
// 		sum += number;
// 	}
// 	return sum;
// }
// alert(sumInput())

// function getMaxSubSum(arr) {
// 	let maxSum = 0;
// 	let partialSum = 0
// 	for (let item of arr) {
// 		partialSum += item;
// 		// maxSum = Math.max(maxSum, partialSum);
// 		if (partialSum > maxSum) {
// 			maxSum = partialSum
// 		}
// 		if (partialSum < 0) {
// 			partialSum = 0
// 		}
// 	}
// 	return maxSum;
// }

// console.log(getMaxSubSum([-1, 2, 3, -9]));
// console.log(getMaxSubSum([-1, 2, 3, -9, 11]));

const list = [
  { name: "create a post", status: "In progress", priority: "low" },
  { name: "test", status: "Done", priority: "high" },
];

const STATUS = {
  TO_DO: "To Do",
  DONE: "Done",
  IN_PROGRESS: "In progress",
};

const PRIORITY = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
};

const ERRORS = {
	NAME_OF_TASK_NOT_EXIST: "name of task not exist",
	NAME_OF_TASK_EMPTY: "name is task is empty",
	NAME_OF_PRIORITY_WRONG: 'name of priority task is wrong',
	NAME_OF_STATUS: `status must be ${STATUS.TO_DO}, ${STATUS.IN_PROGRESS}, ${STATUS.DONE}`,
}

function addTask(list, nameTask, priorityTask) {
  // let nameAddTask = list.findIndex(el => el.name !== nameTask)


  if (!PRIORITY[priorityTask]) {
    console.log(ERRORS.NAME_OF_PRIORITY_WRONG);
  } else {
    list.push({ name: nameTask, status: STATUS.TO_DO, priority: priorityTask });
		console.log(`task ${nameTask} has been added`);
  }

}

function deleteTask(list, nameTask) {
  let indexDeleteTask = list.findIndex(el => el.name === nameTask)

  // const newList = list.filter((el) => el.name == nameTask);
  // console.log(list = newList);

  if (indexDeleteTask < 0) {
  	console.log("task not exist at list");
  } else {
  	list.splice(indexDeleteTask, 1)
		console.log(`task "${nameTask}" success deleted`);
  }
}

function changeStatus(list, nameTask, statusTask) {

	
  let nameChangeTask = list.findIndex((task) => task.name == nameTask);
  if (nameChangeTask < 0) {
    console.log(`«${nameTask}» ` + ERRORS.NAME_OF_TASK_NOT_EXIST);
  } else {
    list[nameChangeTask].status = statusTask;
    console.log(`status task «${nameTask}» will be changed`);
  }
}

function showList() {
  console.log("To_Do:");
  let findItem = list.filter((item) => item.status == STATUS.TO_DO);
  if (findItem.length > 0) {
    findItem.forEach((item) => console.log("\t", item.name));
  } else {
    console.log("\t - ");
  }

  console.log("In_Progress: ");
  findItem = list.filter((item) => item.status == STATUS.IN_PROGRESS);
  if (findItem.length > 0) {
    findItem.forEach((item) => console.log("\t", item.name));
  } else {
    console.log("\t - ");
  }

  console.log("Done: ");

  findItem = list.filter((item) => item.status == STATUS.DONE);
  if (findItem.length > 0) {
    findItem.forEach((item) => console.log("\t", item.name));
  } else {
    console.log("\t - ");
  }
}

showList(list);
deleteTask(list, 'test')
addTask(list, "test1", "HIGH1");
addTask(list, "nametask", "HIGH");
showList(list);
changeStatus(list, 'create a post', 'Done')
changeStatus(list, 'nowayman', 'Done')
showList(list)
