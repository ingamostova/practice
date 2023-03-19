const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const elements = [];

ingredients.forEach((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  elements.push(item);
});

// for (const ingredient of ingredients) {
//   const item = document.createElement("li");
//   item.textContent = ingredient;
//   item.classList.add("item");
//   elements.push(item);
// }

list.append(...elements);
