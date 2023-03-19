const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", onInputChange);

function onInputChange(evt) {
  if (!evt.currentTarget.value) {
    return (span.textContent = "Anonymus");
  }
  return (span.textContent = evt.currentTarget.value);
}
