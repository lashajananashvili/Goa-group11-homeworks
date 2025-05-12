function add(a: number, b: number): number {
    return a + b;
  }
  
  const num1Input = document.getElementById("num1") as HTMLInputElement;
  const num2Input = document.getElementById("num2") as HTMLInputElement;
  const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
  const resultDisplay = document.getElementById("result") as HTMLSpanElement;
  
  addBtn.addEventListener("click", () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
  
    if (isNaN(num1) || isNaN(num2)) {
      resultDisplay.textContent = "გთხოვთ შეიყვანეთ ორივე რიცხვი.";
      return;
    }
  
    const sum = add(num1, num2);
    resultDisplay.textContent = sum.toString();
  });
  