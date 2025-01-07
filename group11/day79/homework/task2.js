const passwordField = document.getElementById("password");
const message = document.getElementById("passwordMessage");

passwordField.addEventListener("input", () => {
  if (passwordField.value.length < 8) {
    message.textContent = "Password must be at least 8 characters.";
  } else {
    message.textContent = "";
  }
});
