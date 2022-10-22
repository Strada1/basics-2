const list = {
	'create a new practice task': 'In Progress',
	'take a walk with the dog':'Done',
	'fix the shelf':'To Do',
}

function changeStatus(){
	list['write a post'] = 'Done';
	return list['write a post'];
};
function addTask(){
	list['have a walk'] = 'To Do';
	return list['have a walk'];
};
function deleteTask(){
	delete list['have a walk'];
	return 'delete';
};
function showList(){

}

console.log(changeStatus());
console.log(addTask());
console.log(deleteTask());
console.log(showList());
