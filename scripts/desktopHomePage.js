const childFromMain = document.querySelector(".email--form--top");
const newParent = document.querySelector(".header--home-page");
const oldParent = document.querySelector(".main--home-page");

function displayWindowSize() {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 1440) {
    newParent.appendChild(childFromMain);
    childFromMain.style.gridArea = "email";

    const firstFrWidth = (800 * 100) / 1440;
    const secondFrWidth = (640 * 100) / 1440;
    newParent.style.gridTemplateColumns = `${firstFrWidth}% ${secondFrWidth}%`;
  } else {
    oldParent.prepend(childFromMain);
  }
}

displayWindowSize();

window.addEventListener("resize", () => {
  displayWindowSize();
});
