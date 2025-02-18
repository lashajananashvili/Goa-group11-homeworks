
const form = document.getElementById('data-form');
const tableBody = document.getElementById('data-table').querySelector('tbody');

form.addEventListener('submit', function (event) {
  event.preventDefault(); 
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const age = document.getElementById('age').value;
  
  addRowToTable(name, email, age);

  form.reset();
});
function addRowToTable(name, email, age) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${age}</td>
  `;
  tableBody.appendChild(row);
}
