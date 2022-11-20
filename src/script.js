document.addEventListener('DOMContentLoaded', init, false);
function init(){
    const button = document.querySelector("#menu-button")
    const menu = document.querySelector("#m-menu")
    
    button.addEventListener('click', ()=>{
        menu.classList.toggle("hidden")
    })
};