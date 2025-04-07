import { useState, useEffect } from "react";

export default function useAuth() {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("currentUser"));
  });

  const login = (username, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const found = users.find(
      (u) => u.username === username && u.password === password
    );
    if (found) {
      localStorage.setItem("currentUser", JSON.stringify(found));
      setUser(found);
    } else {
      alert("მომხმარებელი ვერ მოიძებნა");
    }
  };

  const register = (username, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find((u) => u.username === username)) {
      alert("მომხმარებელი უკვე არსებობს");
      return;
    }
    const newUser = { username, password };
    const updated = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(updated));
    login(username, password);
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  return { user, login, register, logout };
}