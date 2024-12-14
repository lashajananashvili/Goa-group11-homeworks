document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const inputs = document.querySelectorAll("input, select");
    inputs.forEach(input => input.classList.remove("error"));
  
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const gender = document.getElementById("gender");
    const country = document.getElementById("country");
    const terms = document.getElementById("terms");
  
    let valid = true;
  
    [name, email, password, gender, country].forEach(field => {
      if (!field.value) {
        field.classList.add("error");
        valid = false;
      }
    });
  
    if (!terms.checked) {
      alert("You must agree to the Terms & Conditions to register.");
      valid = false;
    }
  
    if (valid) {
      alert("Registration successful!");
      document.getElementById("registrationForm").reset(); 
    }
  });
  