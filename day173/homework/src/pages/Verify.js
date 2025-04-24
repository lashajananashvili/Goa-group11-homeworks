import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Verify = () => {
  const { email } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = users.map(u => u.email === email ? { ...u, verified: true } : u);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    navigate('/login');
  }, [email, navigate]);

  return <p>Verifying...</p>;
};

export default Verify;