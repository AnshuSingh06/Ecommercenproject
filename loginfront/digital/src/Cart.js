import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [productIdToAdd, setProductIdToAdd] = useState('');
  const [quantityToAdd, setQuantityToAdd] = useState(1);
  const [productIdToRemove, setProductIdToRemove] = useState('');
  const [userId, setUserId] = useState(''); // Replace with actual user ID or method to get it

  useEffect(() => {
    // Fetch cart items for the user
    axios.get(`http://localhost:5000/api/cart/${userId}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      .then(response => setCart(response.data))
      .catch(error => console.error(error));
  }, [userId]);

  const handleAddToCart = () => {
    axios.post('http://localhost:5000/api/cart/add', { userId, productId: productIdToAdd, quantity: quantityToAdd }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      .then(response => {
        setCart(response.data);
        setProductIdToAdd('');
        setQuantityToAdd(1);
      })
      .catch(error => console.error(error));
  };

  const handleRemoveFromCart = () => {
    axios.post('http://localhost:5000/api/cart/remove', { userId, productId: productIdToRemove }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      .then(response => {
        setCart(response.data);
        setProductIdToRemove('');
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.products && cart.products.map(item => (
          <li key={item.productId._id}>
            {item.productId.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>

      <div>
        <h3>Add to Cart</h3>
        <input
          type="text"
          placeholder="Product ID"
          value={productIdToAdd}
          onChange={e => setProductIdToAdd(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantityToAdd}
          onChange={e => setQuantityToAdd(Number(e.target.value))}
        />
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>

      <div>
        <h3>Remove from Cart</h3>
        <input
          type="text"
          placeholder="Product ID"
          value={productIdToRemove}
          onChange={e => setProductIdToRemove(e.target.value)}
        />
        <button onClick={handleRemoveFromCart}>Remove from Cart</button>
      </div>
    </div>
  );
};

export default Cart;
