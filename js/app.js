
function menuHamburguer(){
    let navBar = document.querySelector("#navBar");
    let barIcons = document.querySelector("#barIcons");
    if (navBar.className === "navBarHide") {
        navBar.className = "navBarShow";
        barIcons.src="./images/icon-close.svg";
    } else {
        navBar.className = "navBarHide";
        barIcons.src="./images/icon-hamburger.svg";
    }    
}








