import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({ ...user, verified: false });
    localStorage.setItem('users', JSON.stringify(users));
    navigate(`/verify/${user.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" onChange={e => setUser({ ...user, email: e.target.value })} required />
      <input type="password" placeholder="Password" onChange={e => setUser({ ...user, password: e.target.value })} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;