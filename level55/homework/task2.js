const num1 = parseFloat(prompt("შეიყვანეთ პირველი რიცხვი:"));
const num2 = parseFloat(prompt("შეიყვანეთ მეორე რიცხვი:"));

if (!isNaN(num1) && !isNaN(num2)) {
    alert(`რიცხვების ჯამი არის: ${num1 + num2}`);
} else {
    alert("გთხოვთ, სწორად შეიყვანეთ რიცხვები.");
}
