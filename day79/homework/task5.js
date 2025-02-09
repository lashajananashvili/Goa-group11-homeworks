const colorSelect = document.getElementById("colorSelect");
    const selectedColorDiv = document.getElementById("selectedColor");

    colorSelect.addEventListener("change", () => {
      const selectedColor = colorSelect.value;
      if (selectedColor) {
        selectedColorDiv.textContent = `Selected Color: ${selectedColor}`;
        selectedColorDiv.style.color = selectedColor.toLowerCase();
      } else {
        selectedColorDiv.textContent = "";
      }
    });