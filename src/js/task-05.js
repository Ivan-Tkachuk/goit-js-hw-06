const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener("input", onInput);

function onInput(event) {
  output.textContent = event.currentTarget.value;
  if (output.textContent === "") {
    output.textContent = "Anonymous";
  }
}
