import { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import useAuth from "./hooks/useAuth";

export default function App() {
  const { user, login, register, logout } = useAuth();
  const [view, setView] = useState("login");

  if (!user) {
    return view === "register" ? (
      <Register onRegister={register} onSwitch={() => setView("login")} />
    ) : (
      <Login onLogin={login} onSwitch={() => setView("register")} />
    );
  }

  return <Dashboard user={user} onLogout={logout} />;
}