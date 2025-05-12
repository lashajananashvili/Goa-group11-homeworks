import React, { useState, useMemo } from "react";
import Product from "./Product";

const products = [
  { id: 1, name: "Laptop", price: 1000, category: "electronics" },
  { id: 2, name: "Chair", price: 150, category: "furniture" },
  { id: 3, name: "T-Shirt", price: 25, category: "clothing" },
  { id: 4, name: "Phone", price: 800, category: "electronics" },
  { id: 5, name: "Sofa", price: 600, category: "furniture" },
  { id: 6, name: "Jeans", price: 40, category: "clothing" }
];

const categories = ["all", "electronics", "furniture", "clothing"];

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = useMemo(() => {
    return selectedCategory === "all"
      ? products
      : products.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>პროდუქტების სია</h1>
      <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <div style={{ marginTop: "20px" }}>
        {filteredProducts.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default App;
