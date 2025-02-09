const clearButton = document.getElementById("clearButton");
const form = document.getElementById("clearForm");

clearButton.addEventListener("click", () => {
  form.reset(); 
});
