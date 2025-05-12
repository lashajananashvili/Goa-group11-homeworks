import React, { useState, useMemo } from "react";
import Message from "./Message";

function factorial(n: number): number {
  console.log("Calculating factorial...");
  return n <= 1 ? 1 : n * factorial(n - 1);
}

const App: React.FC = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("გამარჯობა");

  const fact = useMemo(() => factorial(count), [count]);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>გაზრდა</button>
      <p>ფაქტორიალი: {fact}</p>
      <hr />
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="ტექსტი"
      />
      <Message text={text} />
    </div>
  );
};

export default App;
