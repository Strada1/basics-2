import { containerBusiness,containerBusinessLow } from "./variables.js"
import { deleteTask } from "./Todo-logic.js"
import { createList } from "./Todo-logic.js"

containerBusiness.addEventListener('click',deleteElement)
containerBusinessLow.addEventListener('click',deleteElement)
export function deleteElement(e){
    
    if(e.target.className==='close'){
  deleteTask(e.target.previousSibling.innerText)
   containerBusinessLow.innerHTML=""
    containerBusiness.innerHTML=""    
  createList()
    }
}