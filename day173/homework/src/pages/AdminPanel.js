import React, { useState, useEffect } from 'react';

const AdminPanel = () => {
  const [product, setProduct] = useState({ name: '', price: '' });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('products') || '[]');
    setProducts(data);
  }, []);

  const addProduct = () => {
    const updated = [...products, product];
    setProducts(updated);
    localStorage.setItem('products', JSON.stringify(updated));
    setProduct({ name: '', price: '' });
  };

  const removeProduct = (index) => {
    const updated = products.filter((_, i) => i !== index);
    setProducts(updated);
    localStorage.setItem('products', JSON.stringify(updated));
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <input placeholder="Name" value={product.name} onChange={e => setProduct({ ...product, name: e.target.value })} />
      <input placeholder="Price" value={product.price} onChange={e => setProduct({ ...product, price: e.target.value })} />
      <button onClick={addProduct}>Add Product</button>
      <ul>
        {products.map((p, idx) => (
          <li key={idx}>
            {p.name} - ${p.price}
            <button onClick={() => removeProduct(idx)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;