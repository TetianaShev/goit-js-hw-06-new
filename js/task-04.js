const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
   decrement() {
       this.value -= 1; 
    }
};
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector('#value');

incrementButton.addEventListener("click", function () {
    counterValue.increment();
    valueEl.textContent = counterValue.value;
    console.log(counterValue);
});

decrementButton.addEventListener("click", function () {
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
    console.log(counterValue);
});