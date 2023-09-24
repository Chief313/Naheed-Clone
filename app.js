var megaMenu = document.getElementById("megaMunu-btn")
var megaMenuList = document.getElementById("menuItem")

megaMenu.addEventListener("click", menuToggle);

function menuToggle(){
    console.log("clicked")
    megaMenuList.classList.toggle("menuList");
}