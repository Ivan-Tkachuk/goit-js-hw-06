function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const mainBox = document.getElementById("boxes");
const btnCreate = document.querySelector("#controls button[data-create]");
const btnDestroy = document.querySelector("#controls button[data-destroy]");

input.addEventListener("input", onInput);
function onInput(event) {
  const number = event.currentTarget.value;

  if (number > 100) {
    alert("Number should be less than 100");
    return;
  }

  input.textContent = number;
}

btnCreate.addEventListener("click", createBoxes);

function createBoxes(event) {
  destroyBoxes(event);

  const amount = input.textContent;

  let markup = "";
  let side = 20;
  for (let i = 1; i <= amount; i += 1) {
    side += 10;
    markup += `<div style="background-color: ${getRandomHexColor()}; width: ${side}px; height: ${side}px; display: block"></div>`;
  }

  mainBox.insertAdjacentHTML("beforeend", markup);
}

btnDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes(event) {
  const listBoxes = document.querySelectorAll("#boxes div");
  for (let box of listBoxes) {
    box.remove();
  }
}
