const menuButton = document.querySelector(".nav--menu-logo");
const myCircle = document.querySelector(".header__circle");
const menuWrapper = document.querySelector(".menu-wrapper-js");
const menuWrapper2 = document.querySelector(".menu-wrapper-js-2");
const closeButton = document.querySelector(".menu--close-img");


menuButton.addEventListener('click', () => {
  myCircle.style.zIndex = "2"; 
  menuWrapper.style.display = "block";
  menuWrapper2.style.display = "flex";
})

closeButton.addEventListener('click', () => {
  myCircle.style.zIndex = "0"; 
  menuWrapper.style.display = "none";
  menuWrapper2.style.display = "none";
})
