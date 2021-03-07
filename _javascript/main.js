document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello Bulma!');
});

const hamburger = document.querySelector(".hamburger")
const menuItems = document.querySelector(".children")
let showMenu = false;

function togglemenu(){
  if(!showMenu){
    menuItems.classList.add("show")
    return showMenu = true;
  }
    menuItems.classList.remove("show")
    showMenu = false
  
}

hamburger.addEventListener("click", togglemenu)