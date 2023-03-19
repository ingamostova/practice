const input = document.querySelector("input");
const span = document.querySelector("span");

input.addEventListener("input", onInput);

function onInput(evt) {
  span.style.fontSize = evt.currentTarget.value + "px";
}
