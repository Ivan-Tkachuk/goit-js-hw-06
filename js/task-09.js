function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector(".change-color");

btn.addEventListener("click", onChangeBackgroundColor);

function onChangeBackgroundColor(event) {
  const colorName = document.querySelector(".color");
  colorName.textContent = getRandomHexColor();

  const body = document.querySelector("body");
  body.style.backgroundColor = `${colorName.textContent}`;
}
