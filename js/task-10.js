function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector('#boxes');
const inputMeaning = document.querySelector('#controls > input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
let amount = 0;

createBtn.addEventListener('click', onCreateBtn);
destroyBtn.addEventListener('click', destroyBoxes);
inputMeaning.addEventListener('click', onCurrentAmount);

// --------------Проверяем значение amount-----------------
function onCurrentAmount(event) {
  amount = Number(event.currentTarget.value);
  console.log(amount);
};

// ---------------Создаём boxes--------------

function onCreateBtn(){
  createBoxes(amount);
};
// ---------- Создаем  <div> c amount-------------

function createBoxes(amount) {
  const markup = new Array(amount);

  for (let i = 0; i < markup.length; i+=1){
    markup[i] = `<div style = "background-color:
    ${getRandomHexColor()};
    width: ${ 30 + i * 10 }px;
    height: ${ 30 + i * 10}px;"></div>`;
  }
  boxes.innerHTML = markup.join('');
};

//----------Очищаем содержимое div#boxes-------------

function destroyBoxes() {
  boxes.innerHTML = "";
};