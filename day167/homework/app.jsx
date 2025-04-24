import React, { createContext, useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [account, setAccount] = useState(0);
  const [accounts, setAccounts] = useState(() => {
    const saved = localStorage.getItem('accounts');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('accounts', JSON.stringify(accounts));
  }, [accounts]);

  const register = (data) => {
    const exists = accounts.find(acc => acc.username === data.username);
    if (exists) return alert('Username already exists');
    setAccounts([...accounts, data]);
  };

  const login = (data) => {
    const user = accounts.find(acc => acc.username === data.username && acc.password === data.password);
    if (user) setAccount(user);
    else alert('Invalid credentials');
  };

  const deleteAccount = (username) => {
    const updated = accounts.filter(acc => acc.username !== username);
    setAccounts(updated);
    if (account.username === username) setAccount(0);
  };

  const updateAccount = (username, newData) => {
    const updated = accounts.map(acc => acc.username === username ? { ...acc, ...newData } : acc);
    setAccounts(updated);
    if (account.username === username) setAccount({ ...account, ...newData });
  };

  return (
    <AuthContext.Provider value={{ account, register, login, deleteAccount, updateAccount, accounts }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

const Register = () => {
  const { register: registerUser } = useAuth();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = data => {
    registerUser(data);
    navigate('/login');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <input {...register('username')} placeholder="Username" required className="block mb-2" />
      <input type="password" {...register('password')} placeholder="Password" required className="block mb-2" />
      <button type="submit">Register</button>
    </form>
  );
};

const Login = () => {
  const { login } = useAuth();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = data => {
    login(data);
    navigate('/admin');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <input {...register('username')} placeholder="Username" required className="block mb-2" />
      <input type="password" {...register('password')} placeholder="Password" required className="block mb-2" />
      <button type="submit">Login</button>
    </form>
  );
};

const AdminPanel = () => {
  const { account, accounts, deleteAccount, updateAccount } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const onUpdate = data => {
    updateAccount(data.username, data);
    reset();
  };

  return (
    <div className="p-4">
      <h2>Current Account</h2>
      <pre>{JSON.stringify(account, null, 2)}</pre>
      <h3>Edit Account</h3>
      <form onSubmit={handleSubmit(onUpdate)}>
        <input {...register('username')} placeholder="Username" required className="block mb-2" />
        <input {...register('password')} placeholder="New Password" className="block mb-2" />
        <button type="submit">Update</button>
      </form>
      <h3>All Accounts</h3>
      <ul>
        {accounts.map((acc, i) => (
          <li key={i}>
            {acc.username} <button onClick={() => deleteAccount(acc.username)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const { account } = useAuth();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={account !== 0 ? <AdminPanel /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

const Root = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

export default Root;
