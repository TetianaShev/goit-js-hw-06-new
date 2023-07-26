const textInput = document.querySelector('#font-size-control');
const textInputSize = document.querySelector('#text');

textInput.addEventListener("input", (event) => {
    textInputSize.style.fontSize = event.currentTarget.value + "px";
});