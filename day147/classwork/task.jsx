import { useState } from "react";

export default function EventHandlersAndList() {
  const [text, setText] = useState("Initial text");
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // ჩვეულებრივი ფუნქცია, რომელიც ანახლებს ტექსტს
  const handleClick = () => {
    setText("Updated text via handleClick");
  };

  // ქოლბექ ფუნქცია, რომელიც ანახლებს ტექსტს
  const handleCorrect = () => {
    setText((prevText) => prevText + " (Updated via handleCorrect)");
  };

  // სიის განახლება ქალბექ ფუნქციის მეშვეობით
  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems((prevItems) => [...prevItems, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto border rounded-lg shadow-md">
      <p className="mb-4">{text}</p>
      <button onClick={handleClick} className="mr-2 p-2 bg-blue-500 text-white rounded">
        Update Text (Normal)
      </button>
      <button onClick={handleCorrect} className="p-2 bg-green-500 text-white rounded">
        Update Text (Callback)
      </button>

      {/* Input და ღილაკი სიაში ელემენტების დასამატებლად */}
      <div className="mt-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border p-2 w-full mb-2"
          placeholder="Enter item"
        />
        <button onClick={handleAddItem} className="p-2 bg-purple-500 text-white rounded w-full">
          Add Item
        </button>
      </div>

      {/* სიაში ელემენტების გამოსახვა */}
      <ul className="mt-4">
        {items.map((item, index) => (
          <li key={index} className="border p-2 mb-1">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
