const list = {
	'\'Become a GigaCoder\'': 'In Progress',
	'\'Write a ToDo\'' : 'To Do',
	'\'Go for a walk\'': 'To Do',
}

function changeStatus(task, status){
	list[task]=status
}

function addTask(newTask, newStatus){
	list[newTask]=newStatus
}
function deleteTask(task){
	delete list[task];
}


function showList(){
	console.log('To Do:')
for(let key in list)
if(list[key]=='To Do'){
	console.log('\t'+key+',')
	}
console.log('Done:')
for(let key in list)
if(list[key]=='Done'){
	console.log('\t'+key);
}else{
	console.log('\t'+'-');
}
console.log('In Progress:')
for(let key in list)
if(list[key]=='In Progress'){
console.log('\t'+key);
}
}
addTask('Grow a tree', 'In Progress')
changeStatus('\'Go for a walk\'', 'In Progress')
deleteTask('Grow a tree')
showList()

