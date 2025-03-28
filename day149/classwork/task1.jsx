import { useState } from "react";

export default function UserForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="p-4 max-w-md mx-auto border rounded-lg shadow-md">
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="block border p-2 mb-2 w-full"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="block border p-2 mb-2 w-full"
      />
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        className="block border p-2 mb-2 w-full"
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        className="block border p-2 mb-2 w-full"
      />
      <div className="mt-4">
        <p>Email: {formData.email}</p>
        <p>Password: {formData.password}</p>
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
      </div>
    </div>
  );
}