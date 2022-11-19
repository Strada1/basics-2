


import { createElementUI } from "./createElementUI.js"
import { containerBusiness } from "./variables.js"
import { containerBusinessLow } from "./variables.js"
import { addTask, createList } from "./Todo-logic.js"
const addImpotant=document.querySelector('.add-impotant')
const noImportant=document.querySelector('.add-noimpotant')
const containerInputHigh=document.querySelector('.container-input-high')
const containerInputLow=document.querySelector('.container-input-low')
containerInputHigh.onsubmit=addNewBusiness
containerInputLow.onsubmit=addNewBusiness

 function addNewBusiness(e){
    e.preventDefault()
    if(e.target.contains(addImpotant)){
        addTask(addImpotant.value,'In Progress','high')
    }
    if(e.target.contains(noImportant)){
        addTask(noImportant.value,'In Progress','low')
    }
    containerBusinessLow.innerHTML=""
    containerBusiness.innerHTML=""  
   
   createList()
    addImpotant.value=''
    noImportant.value=''

}




