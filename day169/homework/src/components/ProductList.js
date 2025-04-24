import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([
      { id: 1, name: 'Product 1', price: 10, image: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Product 2', price: 20, image: 'https://via.placeholder.com/150' }
    ]);
  }, []);

  return (
    <div>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;