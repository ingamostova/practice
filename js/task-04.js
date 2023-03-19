const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const span = document.querySelector("#value");

let counterValue = 0;

const onIncrement = () => {
  counterValue += 1;
  span.textContent = counterValue;
};

const onDecrement = () => {
  counterValue -= 1;
  span.textContent = counterValue;
};

increment.addEventListener("click", onIncrement);
decrement.addEventListener("click", onDecrement);
