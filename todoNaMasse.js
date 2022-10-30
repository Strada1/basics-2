const STATUS = {
	IN_PROGRESS: "In Progress",
	DONE: "Done",
	TODO: "To Do",
};
const PRIORITY = {
	HIGH: "high",
	LOW: "low",
};
const list = [
	{
		Name: "create a post",
		status: STATUS.IN_PROGRESS,
		priority: PRIORITY.LOW,
	},
	{
		Name: "test",
		status: STATUS.DONE,
		priority: PRIORITY.HIGH,
	},
];

function addTask(Name) {
	list.push({Name,
	status: STATUS.TODO,
	priority: PRIORITY.HIGH});
};

function deleteTask(Name) {
	let index = list.findIndex(item => item.Name === Name);
	list.splice(index, 1);
};


function changeStatus(Name, Status) {
	list.forEach(item => {
		if (Name == item.Name) {
			item.status = Status
		};
	});
};

function changePriority(Name, Priority) {
	list.forEach(item => {
		if (Name == item.Name) {
			item.priority = Priority
		};
	});
};

function showList() {
	console.log(`${STATUS.TODO}:`);
	list.forEach(item => {
		if (item.status == STATUS.TODO) {
			console.log(item.Name, item.priority);
		};
	});
		
	console.log(`${STATUS.IN_PROGRESS}:`);
	list.forEach(item => {
		if (item.status == STATUS.IN_PROGRESS) {
			console.log(item.Name, item.priority);
		};
	});

	console.log(`${STATUS.DONE}:`);
	list.forEach(item => {
		if (item.status == STATUS.DONE) {
			console.log(item.Name, item.priority);
		};
	});
};

addTask("Hepa36umb MoHumop");
deleteTask("test");
changePriority("Hepa36umb MoHumop", PRIORITY.HIGH);
changeStatus("create a post", STATUS.TODO);
changeStatus("Hepa36umb MoHumop", STATUS.IN_PROGRESS);
showList();