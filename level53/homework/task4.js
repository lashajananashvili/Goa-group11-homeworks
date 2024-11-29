const imgElement = document.getElementById("myImage");
const buttonElement = document.getElementById("resizeButton");

buttonElement.addEventListener("click", () => {
    imgElement.style.width = "400px";
    imgElement.style.height = "400px";
});
