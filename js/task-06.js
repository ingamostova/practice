const input = document.querySelector("input");

input.addEventListener("blur", onBlur);
console.log(input.dataset.length);

function onBlur(evt) {
  if (evt.currentTarget.value.length == input.dataset.length) {
    input.classList.add("valid");
    input.classList.remove("invalid");
    return;
  }
  return input.classList.add("invalid");
}
