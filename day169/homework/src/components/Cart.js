import React from 'react';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import { useCart } from '../hooks/useCart';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart } = useCart();

  return (
    <div>
      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <CartSummary />
      <Link to="/checkout">Proceed to Checkout</Link>
    </div>
  );
};

export default Cart;