

function calc(operators,a,b){
  let res=0
let object={
  add:'+',
  multi:'*',
  subtract:'-'
}

  switch(object[operators]){
    case'+':
    res= a+b
    break;
    case'*':
    res= a*b
    break;
    case'-':
    res=a-b
    break;
  }

  return res
}
// console.log(calc('add', 1, 2))
// console.log(calc('multi', 1, 2))
// console.log(calc('subtract', 3, 2))
const list = {
	"create a new practice task": "In Progress",
	"make a bed": "Done",
	"write a post": "To Do",
}
function changeStatus(name,status){
  list[name]=status

}
function addTask(name){
  list[name]='In Progress'
}
function deleteTask(name){
  delete list[name]
}

function showList(){
  const todo=[]
  const progress=[]
  const done=[]
  for ( key in list){
    
      if(list[key]==='In Progress'){
        progress.push(key)
      }
 
      if(list[key]==='Done'){
        done.push(key)
      } if(list[key]==='To Do'){
        todo.push(key)
      }
    
  }
  return {progress,todo,done}
}


console.log(showList())