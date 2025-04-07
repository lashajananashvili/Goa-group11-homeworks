import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    localStorage.setItem("user", JSON.stringify(form));
    alert("რეგისტრაცია წარმატებით დასრულდა!");
    setForm({ name: "", email: "", password: "" });
  };

  return (
    <div>
      <h2>რეგისტრაცია</h2>
      <input
        type="text"
        name="name"
        placeholder="სახელი"
        value={form.name}
        onChange={handleChange}
      /><br />
      <input
        type="email"
        name="email"
        placeholder="იმეილი"
        value={form.email}
        onChange={handleChange}
      /><br />
      <input
        type="password"
        name="password"
        placeholder="პაროლი"
        value={form.password}
        onChange={handleChange}
      /><br />
      <button onClick={handleRegister}>დარეგისტრირება</button>
    </div>
  );
}
