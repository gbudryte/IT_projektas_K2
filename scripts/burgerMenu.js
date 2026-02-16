const burgerContainer = document.querySelector(".burger-container");

burgerContainer.innerHTML = `
        <div class="menu-wrapper-js">
        </div>
        <div class="menu-wrapper-js-2" id="mobile-navigation">
          <img src="assets/shared/mobile/close.svg" alt="" role="button" tabindex="0" aria-label="Close menu" class="menu--close-img">
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
`;

const menuButton = document.querySelector(".nav--menu-logo");
const myCircle = document.querySelector(".header__circle");
const closeButton = document.querySelector(".menu--close-img");

const openMenu = () => {
  burgerContainer.style.display = "block";
  myCircle.style.zIndex = "2";
  menuButton.setAttribute("aria-expanded", "true");
};

const closeMenu = () => {
  burgerContainer.style.display = "none";
  myCircle.style.zIndex = "0";
  menuButton.setAttribute("aria-expanded", "false");
};

menuButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);

[menuButton, closeButton].forEach((btn) => {
  btn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (btn === menuButton) openMenu();
      else closeMenu();
    }
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    burgerContainer.style.display = "none";
    myCircle.style.zIndex = "0";
  }
});
