import { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("მომხმარებელი არ არსებობს");
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      onLogin(savedUser);
    } else {
      alert("მეილი ან პაროლი არასწორია");
    }
  };

  return (
    <div>
      <h2>ავტორიზაცია</h2>
      <input
        type="email"
        placeholder="იმეილი"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="პაროლი"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <button onClick={handleLogin}>შესვლა</button>
    </div>
  );
}
