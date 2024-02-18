const menu = document.querySelector(".menu");
const openNav = document.querySelector("#open-nav");
const closeNav = document.querySelector("#close-nav");
const body = document.querySelector("body");
const darkMode = document.querySelector("#dark");
const lightMode = document.querySelector("#light");
const logo = document.querySelector("#logo-img");
openNav.addEventListener("click", () => {
  menu.style.display = "flex";
  openNav.style.display = "none";
  closeNav.style.display = "inline-block";
});
closeNav.addEventListener("click", () => {
  menu.style.display = "none";
  openNav.style.display = "inline-block";
  closeNav.style.display = "none";
});
/*dark mode of web page*/
darkMode.addEventListener("click", () => {
  body.style.backgroundColor = "black";
  body.style.color = "white";
  const Nav_links = document.getElementsByTagName("a");
  for (let i = 0; i < Nav_links.length; i++) {
    Nav_links[i].style.color = "white";
  }
  logo.style.filter = "contrast(0%)";
  darkMode.style.display = "none";
  lightMode.style.display = "block";
});
/* light mode of web page*/
lightMode.addEventListener("click", () => {
  body.style.backgroundColor = "white";
  body.style.color = "black";
  const Nav_links = document.getElementsByTagName("a");
  for (let i = 0; i < Nav_links.length; i++) {
    Nav_links[i].style.color = "black";
  }
  logo.style.filter = "none";
  darkMode.style.display = "block";
  lightMode.style.display = "none";
});
