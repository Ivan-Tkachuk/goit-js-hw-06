function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector(".change-color");

btn.addEventListener("click", onChangeBackgroundColor);

function onChangeBackgroundColor(event) {
  const body = document.querySelector("body");
  body.style.backgroundColor = getRandomHexColor();

  const colorName = document.querySelector(".color");
  colorName.textContent = getRandomHexColor();
}
