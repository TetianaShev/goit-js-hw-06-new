const changeColorEl = document.querySelector(".change-color");
const textColor = document.querySelector(".color");


changeColorEl.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  textColor.textContent = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}