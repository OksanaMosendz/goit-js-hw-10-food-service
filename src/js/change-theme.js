import {Theme} from './thems.js';
const body= document.querySelector('body');
const themeSwitchToggle=document.querySelector(`#theme-switch-toggle`);

body.classList.add(Theme.LIGHT);

const changeTheme=()=>{ if(isLight)
  body.classList.add(Theme.DARK);
}

themeSwitchToggle.addEventListener('change',changeTheme);

