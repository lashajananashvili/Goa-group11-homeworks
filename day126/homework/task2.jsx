const isLoggedIn = true;

function Greeting() {
  return <h1>{isLoggedIn ? "Welcome!" : "Please log in"}</h1>;
}
