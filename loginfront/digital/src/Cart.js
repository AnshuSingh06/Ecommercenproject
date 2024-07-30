import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/cart')
      .then(response => setCart(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.products.map(item => (
          <li key={item.productId}>
            {item.productId} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
