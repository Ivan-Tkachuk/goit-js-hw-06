const input = document.getElementById("font-size-control");
const text = document.getElementById("text");

input.addEventListener("input", onChangeFontSize);

function onChangeFontSize(event) {
  const { value } = event.currentTarget;
  text.style.fontSize = `${value}px`;
}
