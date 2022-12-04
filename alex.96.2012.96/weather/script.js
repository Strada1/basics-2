import { newRespononse } from "./newResponse.js";
import { form, like,name,listLocation,details, buttonContainer,detailContainer,containerNow,now } from "./variables.js";
import {updateLocationList,addLocationList,deleteItem,pressLocation} from './addedLocation.js'


document.addEventListener("DOMContentLoaded", ready)
function ready(){
   newRespononse()
   updateLocationList()

}



 form.addEventListener('submit',newRespononse)
like.addEventListener('click',pressLike)

function pressLike(){
      toggleLike()
      addLocationList(name.textContent)
      updateLocationList()
}
listLocation.addEventListener('click',(deleteItem))
listLocation.addEventListener('click',(pressLocation))


function toggleLike(){
   like.classList.toggle('like-active')
}


details.addEventListener('click',openDetails)

function openDetails(){
   containerNow.style.display='none'
   detailContainer.style.display='block'
}

buttonContainer.addEventListener('click',changeActive)

function changeActive(e){
   if(!e.target.classList.contains('active')){
     const parent=buttonContainer.children
      for(const child of parent){
        child.classList.remove('active')
      }
      e.target.classList.add('active')
      if(e.target.classList.contains('now')){
         openNowUI()
      }
   }
}

now.addEventListener('click',openNowUI)

function openNowUI(){
   console.log(now.classList.contains('active'))
   
   if (now.classList.contains('active')){
      console.log('yex')
   containerNow.style.display='block'
   detailContainer.style.display='none'}
}