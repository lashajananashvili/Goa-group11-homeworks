const contentDiv = document.getElementById("content");

async function fetchPosts() {
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();
  return data.posts;
}

function renderNewsFeed() {
  contentDiv.innerHTML = '<h2>News Feed</h2>';
  fetchPosts().then(posts => {
    const newsFeedDiv = document.createElement("div");
    newsFeedDiv.classList.add("news-feed");
    posts.forEach(post => {
      const postDiv = document.createElement("div");
      postDiv.classList.add("post");
      postDiv.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      `;
      newsFeedDiv.appendChild(postDiv);
    });
    contentDiv.appendChild(newsFeedDiv);
  });
}

function renderRegistrationForm() {
  contentDiv.innerHTML = `
    <h2>Registration</h2>
    <form id="registrationForm">
      <label for="username">Username:</label>
      <input type="text" id="username" required>
      <br><br>
      <label for="password">Password:</label>
      <input type="password" id="password" required>
      <br><br>
      <button type="submit">Register</button>
    </form>
  `;

  const registrationForm = document.getElementById("registrationForm");
  registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("User registered successfully!");
  });
}

function renderAuthorizationForm() {
  contentDiv.innerHTML = `
    <h2>Authorization</h2>
    <form id="authorizationForm">
      <label for="loginUsername">Username:</label>
      <input type="text" id="loginUsername" required>
      <br><br>
      <label for="loginPassword">Password:</label>
      <input type="password" id="loginPassword" required>
      <br><br>
      <button type="submit">Login</button>
    </form>
  `;

  const authorizationForm = document.getElementById("authorizationForm");
  authorizationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("User authorized successfully!");
  });
}

document.getElementById("newsFeedLink").addEventListener("click", renderNewsFeed);
document.getElementById("registrationLink").addEventListener("click", renderRegistrationForm);
document.getElementById("authorizationLink").addEventListener("click", renderAuthorizationForm);

renderNewsFeed();
