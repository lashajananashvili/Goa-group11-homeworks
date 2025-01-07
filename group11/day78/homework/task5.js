
const counterParagraph = document.getElementById("counter");
const incrementButton = document.getElementById("incrementButton");

let counter = 0;

function increaseCounter() {
  counter++;
  counterParagraph.textContent = counter; 
}

incrementButton.addEventListener("click", increaseCounter);
