const burgerContainer = document.querySelector(".burger-container");

burgerContainer.innerHTML = `
        <div class="menu-wrapper-js">
        </div>
        <div class="menu-wrapper-js-2">
          <img src="assets/shared/mobile/close.svg" alt="close image" class="menu--close-img">
          <hr class="menu__hr">
          <nav>
            <ul class="nav__ul-js">
              <li><a href="/pricing.html">Pricing</a></li>
              <li><a href="/about.html">About</a></li>
              <li><a href="/contact.html">Contact</a></li>
            </ul>
            <button class="nav__button--demo-js">Schedule a Demo</button>
          </nav>
        </div>
`

const menuButton = document.querySelector(".nav--menu-logo");
const myCircle = document.querySelector(".header__circle");
const closeButton = document.querySelector(".menu--close-img");

menuButton.addEventListener('click', () => {
  burgerContainer.style.display = "block";
  myCircle.style.zIndex = "2"; 
})

closeButton.addEventListener('click', () => {
  burgerContainer.style.display = "none";
  myCircle.style.zIndex = "0"; 
})
