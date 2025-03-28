import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleButtonClick = (value) => {
    setError(null);
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult(null);
    setError(null);
  };

  const handleCalculate = () => {
    try {
      if (input.includes("/0")) {
        throw new Error("Cannot divide by zero");
      }
      setResult(eval(input));
    } catch (err) {
      setError("Invalid expression");
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto border rounded-lg shadow-md text-center">
      <div className="border p-2 mb-2 text-lg font-mono bg-gray-100">
        {error || result || input || "0"}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((char) => (
          <button
            key={char}
            onClick={() => (char === "=" ? handleCalculate() : handleButtonClick(char))}
            className="p-4 bg-blue-500 text-white rounded-lg"
          >
            {char}
          </button>
        ))}
        <button onClick={handleClear} className="col-span-4 p-4 bg-red-500 text-white rounded-lg">
          Clear
        </button>
      </div>
    </div>
  );
}
