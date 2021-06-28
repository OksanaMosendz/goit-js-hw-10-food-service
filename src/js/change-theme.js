import {Theme} from './thems.js';
const body= document.querySelector('body');
const themeSwitchToggle=document.querySelector(`#theme-switch-toggle`);

const currentTheme=localStorage.getItem("currentTheme");
body.classList.add(currentTheme);

const changeTheme=()=>{
  if  (body.classList.contains(Theme.LIGHT)){
  body.classList.remove(Theme.LIGHT);
  body.classList.add(Theme.DARK);
  localStorage.setItem("currentTheme", `${Theme.DARK}`);
}
  else 
   if(body.classList.contains(Theme.DARK))
   {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
    localStorage.setItem("currentTheme", `${Theme.LIGHT}`);
  }
 }
 
themeSwitchToggle.addEventListener('change',changeTheme);

