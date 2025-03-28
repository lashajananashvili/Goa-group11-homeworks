import { useState, useEffect } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4 max-w-lg mx-auto border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="border-b p-2">
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
