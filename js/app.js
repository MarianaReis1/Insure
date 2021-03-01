
function menuHamburguer(){
    let navBar = document.querySelector("#header__navList");
    let barIcons = document.querySelector(".header__navIcons");
    if (navBar.className === "header__navList--hide") {
        navBar.className = "header__navList--show";
        barIcons.src="./images/icon-close.svg";
    } else {
        navBar.className = "header__navList--hide";
        barIcons.src="./images/icon-hamburger.svg";
    }    
}







