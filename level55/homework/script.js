const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log("სახელი:", name);
    console.log("ელ-ფოსტა:", email);
    console.log("პაროლი:", password);
});