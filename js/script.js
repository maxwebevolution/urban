document.addEventListener("DOMContentLoaded", function(){
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu__collapsed");
    const closeSymb = document.querySelector(".close_menu");
    const menuLink =  document.querySelectorAll(".nav__link");
    hamburger.addEventListener('click', () => {
        menu.style.transform = "translateX(-50%) translateY(0)"; 
    });
    closeSymb.addEventListener('click',closeMenu);
    menuLink.forEach(element => {
        element.onclick = closeMenu;
    });
    function closeMenu (){
        menu.style.transform = "translateX(-50%) translateY(-100%)";
    }
});
