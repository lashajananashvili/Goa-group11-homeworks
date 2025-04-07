import { useState } from "react";

export default function Login({ onLogin, onSwitch }) {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(form.username, form.password);
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">შესვლა</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="username"
          placeholder="მომხმარებელი"
          value={form.username}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="password"
          type="password"
          placeholder="პაროლი"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          შესვლა
        </button>
      </form>
      <button onClick={onSwitch} className="text-blue-500 mt-3">
        არ გაქვს ანგარიში? რეგისტრაცია
      </button>
    </div>
  );
}