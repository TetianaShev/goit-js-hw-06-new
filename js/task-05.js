const currentInput = document.querySelector('#name-input');
const inputName = document.querySelector('#name-output');

currentInput.addEventListener('input', onInputFocus);

function onInputFocus(event) {
   if (event.currentTarget.value === "") {
        inputName.textContent = "Anonymous"
    }
    else {
        inputName.textContent = event.currentTarget.value;
    }
};