import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [price, setPrice] = useState("");

  const handleAddProduct = () => {
    if (!name || !releaseDate || !price) {
      alert("გთხოვთ შეავსოთ ყველა ველი");
      return;
    }
    const newProduct = { name, releaseDate, price };
    setProducts([...products, newProduct]);
    setName("");
    setReleaseDate("");
    setPrice("");
  };

  return (
    <div className="container">
      <h1>ონლაინ მაღაზია</h1>
      <div className="form">
        <input
          type="text"
          placeholder="პროდუქტის სახელი"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="date"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
        />
        <input
          type="number"
          placeholder="ფასი"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button onClick={handleAddProduct}>დამატება</button>
      </div>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <h3>{product.name}</h3>
            <p>გამოშვების ვადა: {product.releaseDate}</p>
            <p>ფასი: {product.price}₾</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
