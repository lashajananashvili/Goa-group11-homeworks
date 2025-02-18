let correctPassword = "1234"; 
let attempts = 3;

while (attempts > 0) {
    let userInput = prompt("enter password:");
    if (userInput === correctPassword) {
        alert("welcome");
        break;
    } else {
        attempts--;
        if (attempts > 0) {
            alert(`wrong answer ${attempts}`);
        } else {
            alert("you are out of tryies");
        }
    }
}
