import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [account, setAccount] = useState(0);
  const [accounts, setAccounts] = useState(
    JSON.parse(localStorage.getItem('accounts')) || []
  );

  useEffect(() => {
    localStorage.setItem('accounts', JSON.stringify(accounts));
  }, [accounts]);

  const register = (newUser) => {
    const existing = accounts.find(acc => acc.username === newUser.username);
    if (existing) return false;
    const updatedAccounts = [...accounts, newUser];
    setAccounts(updatedAccounts);
    return true;
  };

  const login = ({ username, password }) => {
    const user = accounts.find(acc => acc.username === username && acc.password === password);
    if (user) {
      setAccount(user);
      return true;
    }
    return false;
  };

  const deleteAccount = (username) => {
    setAccounts(prev => prev.filter(user => user.username !== username));
    if (account.username === username) setAccount(0);
  };

  const updateAccount = (updatedUser) => {
    setAccounts(prev => prev.map(user => user.username === updatedUser.username ? updatedUser : user));
    if (account.username === updatedUser.username) setAccount(updatedUser);
  };

  return (
    <AuthContext.Provider value={{
      account,
      accounts,
      register,
      login,
      deleteAccount,
      updateAccount
    }}>
      {children}
    </AuthContext.Provider>
  );
};