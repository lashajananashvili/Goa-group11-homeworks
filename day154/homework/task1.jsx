import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [students, setStudents] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    localStorage.setItem("account", JSON.stringify(account));
    localStorage.setItem("accounts", JSON.stringify(accounts));
    localStorage.setItem("students", JSON.stringify(students));
  }, [account, accounts, students]);

  useEffect(() => {
    setStudents(JSON.parse(localStorage.getItem("students")) || []);
    setAccounts(JSON.parse(localStorage.getItem("accounts")) || []);
    setAccount(JSON.parse(localStorage.getItem("account")) || null);
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    const newAccount = {
      email: e.target.email.value,
      pass: e.target.pass.value,
      role: "user", 
    };

    if (accounts.some((acc) => acc.email === newAccount.email)) {
      alert("Account already exists. Please log in.");
      return;
    }

    setAccounts([...accounts, newAccount]);
    alert("Account created successfully!");
    e.target.reset();
  };

  const handleSignin = (e) => {
    e.preventDefault();
    const enteredAccount = {
      email: e.target.email.value,
      pass: e.target.pass.value,
    };

    const loggedInUser = accounts.find(
      (acc) =>
        acc.email === enteredAccount.email && acc.pass === enteredAccount.pass
    );

    if (!loggedInUser) {
      alert("Invalid credentials. Please try again.");
      return;
    }

    setAccount(loggedInUser);
    alert("Logged in successfully!");
    e.target.reset();
  };

  const logout = () => {
    setAccount(null);
    alert("Logged out successfully!");
  };

  const addStudent = (e) => {
    e.preventDefault();
    const student = {
      name: e.target.studentName.value,
      lastname: e.target.studentLastname.value,
      age: e.target.studentAge.value,
    };

    setStudents([...students, student]);
  };

  const deleteStudent = (index) => {
    const filteredStudents = students.filter((_, i) => i !== index);
    setStudents(filteredStudents);
  };

  const updateStudent = (index, updatedStudent) => {
    const newStudents = students.map((student, i) => (i === index ? updatedStudent : student));
    setStudents(newStudents);
  };

  const updateAccount = (updatedAccount) => {
    setAccount(updatedAccount);
    setAccounts(accounts.map((acc) => (acc.email === account.email ? updatedAccount : acc)));
  };

  return (
    <main>
      {account === null ? (
        <section>
          <form onSubmit={handleRegister}>
            <h1>Registration</h1>
            <input type="email" name="email" required />
            <input type="password" name="pass" required />
            <button>Submit</button>
          </form>

          <form onSubmit={handleSignin}>
            <h1>Login</h1>
            <input type="email" name="email" required />
            <input type="password" name="pass" required />
            <button>Submit</button>
          </form>
        </section>
      ) : (
        <section>
          <h1>Welcome, {account.email} ({account.role})</h1>
          <button onClick={logout}>Logout</button>
          {account.role === "admin" && (
            <div>
              <h2>Manage Students</h2>
              <form onSubmit={addStudent}>
                <input type="text" name="studentName" placeholder="Name" required />
                <input type="text" name="studentLastname" placeholder="Lastname" required />
                <input type="number" name="studentAge" placeholder="Age" required />
                <button>Add Student</button>
              </form>
              <ul>
                {students.map((student, index) => (
                  <li key={index}>
                    {student.name} {student.lastname} ({student.age} years old)
                    <button onClick={() => deleteStudent(index)}>Delete</button>
                    <button
                      onClick={() =>
                        updateStudent(index, { ...student, name: prompt("New name:", student.name) })
                      }
                    >
                      Edit
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <h2>Update Account</h2>
          <button onClick={() => updateAccount({ ...account, email: prompt("New email:", account.email) })}>
            Edit Email
          </button>
        </section>
      )}
    </main>
  );
}
