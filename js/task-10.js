function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const input = document.querySelector("input");
const container = document.querySelector("#boxes");

let arr = [];

create.addEventListener("click", onCreate);
destroy.addEventListener("click", onDestroy);

function onCreate() {
  createBoxes(input.value);
}

function onDestroy() {
  container.innerHTML = "";
  arr = [];
}

function createBoxes(amount) {
  let width = 20;
  let height = 20;

  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement("div");
    width += 10;
    height += 10;
    const markup = `<div style="background-color: ${getRandomHexColor()}; width: ${width}px;height: ${height}px;"></div>`;
    arr.push(markup);
  }
  container.insertAdjacentHTML("afterbegin", arr.join(""));
}
