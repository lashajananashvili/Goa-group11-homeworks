import { useState } from "react";
import "./styles.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    if (inputValue.trim() === "") return;
    setTodoList([...todoList, inputValue]);
    setInputValue(""); 
  };

  return (
    <main>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;
