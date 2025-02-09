const form = document.getElementById("search-form");
const usernameInput = document.getElementById("username");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent form submission
  const username = usernameInput.value.trim();

  if (username) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      displayUser(data);
    } catch (error) {
      displayError(error.message);
    }
  } else {
    displayError("Please enter a username");
  }
});

function displayUser(user) {
  resultDiv.innerHTML = `
    <img src="${user.avatar_url}" alt="${user.login}" />
    <h2>${user.login}</h2>
    <p>${user.bio || "No bio available"}</p>
    <p>Public Repositories: ${user.public_repos}</p>
    <a href="${user.html_url}" target="_blank">Visit GitHub Profile</a>
  `;
}

function displayError(message) {
  resultDiv.innerHTML = `<p class="error">${message}</p>`;
}