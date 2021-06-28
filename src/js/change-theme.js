import {Theme} from './thems.js';

const body=document.querySelector('body');
const themeSwitchToggle=document.querySelector(`#theme-switch-toggle`);

const currentTheme=localStorage.getItem("currentTheme")||Theme.LIGHT;
body.classList.add(currentTheme);

themeSwitchToggle.checked=currentTheme===Theme.DARK;

const changeTheme=(e)=>{
  if(e.target.checked){
    localStorage.setItem("currentTheme", `${Theme.DARK}`);
    body.classList.replace(Theme.LIGHT,Theme.DARK);
  }
  else {
    localStorage.setItem("currentTheme", `${Theme.LIGHT}`);
    body.classList.replace(Theme.DARK,Theme.LIGHT);
  }
}

themeSwitchToggle.addEventListener('change',changeTheme);
