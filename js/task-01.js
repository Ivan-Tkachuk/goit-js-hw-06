const list = document.getElementById("categories");
const arrList = [...list.children];
console.log("Number of categories:", arrList.length);

const items = document.querySelectorAll(".item");

for (let item of items) {
  const name = item.firstElementChild;
  console.log("Category:", name.textContent);
  const element = item.lastElementChild;
  const NumberofElements = [...element.children];
  console.log("Elements:", NumberofElements.length);
}
