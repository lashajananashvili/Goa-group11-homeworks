import React, { useState } from 'react';

export default function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price) return;

    const productToAdd = {
      id: Date.now(),
      ...newProduct,
    };

    setProducts((prev) => [...prev, productToAdd]);
    setNewProduct({ name: '', price: '' });
  };

  const handleDeleteProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">ადმინ პანელი</h1>

      <form onSubmit={handleAddProduct} className="mb-6 space-y-2">
        <input
          type="text"
          name="name"
          placeholder="პროდუქტის სახელი"
          value={newProduct.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="ფასი"
          value={newProduct.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          დამატება
        </button>
      </form>

      {products.length > 0 ? (
        <table className="w-full border">
          <thead>
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">სახელი</th>
              <th className="border p-2">ფასი</th>
              <th className="border p-2">მოქმედება</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border p-2">{product.id}</td>
                <td className="border p-2">{product.name}</td>
                <td className="border p-2">{product.price} ₾</td>
                <td className="border p-2 text-center">
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    წაშლა
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>ჯერ პროდუქტი არ არის დამატებული.</p>
      )}
    </div>
  );
}
