import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password && u.verified);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      if (email === 'admin@admin.com') navigate('/admin');
      else navigate('/');
    } else {
      alert('Invalid credentials or not verified');
    }
  };

  return (
    <div>
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;