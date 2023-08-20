var Menu=document.getElementById("menu_table");
Menu.style.height = "0px";
function ToggleMenu() {
    if(Menu.style.height=="0px"){
        Menu.style.height = "fit-content"
    }
    else{
        Menu.style.height = "0px"
    }
}
