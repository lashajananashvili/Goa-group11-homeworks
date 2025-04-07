import { useEffect, useState } from "react";

export default function Dashboard({ user, onLogout }) {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("products");
    return saved ? JSON.parse(saved) : [];
  });
  const [form, setForm] = useState({ name: "", price: "" });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.price.trim()) return;
    const newProduct = { ...form, id: Date.now() };
    setProducts([...products, newProduct]);
    setForm({ name: "", price: "" });
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">მოგესალმები, {user.username}</h2>
        <button onClick={onLogout} className="text-red-500">
          გამოსვლა
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-3 mb-6">
        <input
          name="name"
          placeholder="პროდუქტის სახელი"
          value={form.name}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
        <input
          name="price"
          placeholder="ფასი"
          value={form.price}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          დამატება
        </button>
      </form>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">დასახელება</th>
            <th className="border p-2">ფასი</th>
            <th className="border p-2">მოქმედება</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td className="border p-2">{p.name}</td>
              <td className="border p-2">{p.price}</td>
              <td className="border p-2">
                <button
                  onClick={() => deleteProduct(p.id)}
                  className="text-red-600"
                >
                  წაშლა
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}