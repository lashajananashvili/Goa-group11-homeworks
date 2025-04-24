import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const AdminPanel = () => {
  const { account, accounts, deleteAccount, updateAccount } = useContext(AuthContext);

  return (
    <div>
      <h1>Welcome, {account.username}</h1>
      <h2>Registered Accounts:</h2>
      <ul>
        {accounts.map((user, idx) => (
          <li key={idx}>
            {user.username}
            <button onClick={() => deleteAccount(user.username)}>Delete</button>
            <button onClick={() => updateAccount({ ...user, password: prompt('New password') })}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;