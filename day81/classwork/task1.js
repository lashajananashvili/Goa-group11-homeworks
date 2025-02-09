// Create an empty array to store user objects
const users = [];

// Select the form and user list
const form = document.getElementById("userForm");
const userList = document.getElementById("userList");

// Add an event listener to handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from reloading the page

  // Get input values
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();

  // Create a new user object
  const newUser = {
    firstName: firstName,
    lastName: lastName,
    email: email,
  };

  // Add the new user object to the users array
  users.push(newUser);

  // Update the user list on the page
  updateUserList();

  // Clear the form fields
  form.reset();
});

// Function to update the displayed user list
function updateUserList() {
  // Clear the existing user list
  userList.innerHTML = "";

  // Loop through the users array and display each user
  users.forEach((user, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${user.firstName} ${user.lastName} - ${user.email}`;
    userList.appendChild(li);
  });
}
