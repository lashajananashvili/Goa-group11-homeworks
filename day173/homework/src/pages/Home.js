import React, { useEffect, useState } from 'react';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('products') || '[]');
    setProducts(localData);
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((p, idx) => (
          <li key={idx}>{p.name} - ${p.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;