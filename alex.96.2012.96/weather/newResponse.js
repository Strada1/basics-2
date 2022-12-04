import { input,serverUrl,apiKey,cityName } from "./variables.js";
import { updateUINow } from "./updateUI.js";


export function newRespononse(e){
    if(e!==undefined){
           e.preventDefault();
          cityName.name=input.value
    }
  
    const url = `${serverUrl}?q=${cityName.name}&appid=${apiKey}`;
    let response=fetch(url)
    response
    .then(response=>response.json())
    .then(data=>updateUINow(data))
    .catch(err=>alert(err))
 }