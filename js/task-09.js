function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorEl = document.querySelector(".change-color");
const textColor = document.querySelector(".color");

changeColorEl.addEventListener('click', handlerClick);

function handlerClick(evt) {
  const randomColor = getRandomHexColor();
  textColor.textContent = randomColor;
  console.log(randomColor);
  document.body.style.backgroundColor = randomColor;
};


// changeColorEl.addEventListener("click", () => {
//   document.body.style.backgroundColor = getRandomHexColor();
//   textColor.textContent = getRandomHexColor();
