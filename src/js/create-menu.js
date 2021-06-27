import menuJson from '../data/menu.json';

import menuTemplate from '../template/menuTemplate.hbs';

const menuList=document.querySelector('.js-menu');

const createMenu=(json,template,ul)=>ul.innerHTML=template(json);

createMenu(menuJson,menuTemplate,menuList);
