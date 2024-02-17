
const menu = document.querySelector(".menu");
const openNav = document.querySelector("#open-nav");
const closeNav = document.querySelector("#close-nav");

openNav.addEventListener("click", () => {
    menu.style.display = "flex";
    openNav.style.display = "none";
    closeNav.style.display = "inline-block";
})
closeNav.addEventListener("click", () =>{
    menu.style.display = "none";
    openNav.style.display = "inline-block";
    closeNav.style.display = "none";
})
