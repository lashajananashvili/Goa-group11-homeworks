import React from 'react';
import { useCart } from '../hooks/useCart';

const ProductItem = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div>
      <img src={product.image} alt={product.name} width="150" />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;