const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.getElementById("ingredients");

let arr = [];

for (let ingredient of ingredients) {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  arr.push(li);
}

list.append(...arr);
