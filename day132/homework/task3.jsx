import { useState } from "react";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </main>
  );
}

export default App;
