const inputs = document.querySelectorAll('#dynamic-form input');
const firstnamePara = document.getElementById('current-firstname');
const lastnamePara = document.getElementById('current-lastname');
const emailPara = document.getElementById('current-email');
const passwordPara = document.getElementById('current-password');

function updateValues() {
    firstnamePara.textContent = `First Name: ${document.getElementById('firstname').value}`;
    lastnamePara.textContent = `Last Name: ${document.getElementById('lastname').value}`;
    emailPara.textContent = `Email: ${document.getElementById('email').value}`;
    passwordPara.textContent = `Password: ${document.getElementById('password').value}`;
}

inputs.forEach(input => {
    input.addEventListener('input', updateValues);
});