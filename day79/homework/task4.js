const textarea = document.getElementById("message");
    const charCount = document.getElementById("charCount");
    const maxLength = 200;

    textarea.addEventListener("input", () => {
      const currentLength = textarea.value.length;
      charCount.textContent = `${currentLength}/${maxLength} characters`;
    });