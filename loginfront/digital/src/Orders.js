import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [orderStatus, setOrderStatus] = useState('');
  const [userId, setUserId] = useState(''); // Replace with actual user ID or method to get it

  useEffect(() => {
    // Fetch orders for the user
    axios.get('http://localhost:5000/api/orders', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      .then(response => setOrders(response.data))
      .catch(error => console.error(error));
  }, []);

  const handlePlaceOrder = () => {
    axios.post('http://localhost:5000/api/orders', {}, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      .then(response => {
        setOrders([...orders, response.data]); // Add the new order to the list
        setOrderStatus('Order placed successfully!');
      })
      .catch(error => {
        console.error(error);
        setOrderStatus('Failed to place order.');
      });
  };

  return (
    <div>
      <h2>Orders</h2>
      <button onClick={handlePlaceOrder}>Place Order</button>
      <p>{orderStatus}</p>
      <ul>
        {orders.map(order => (
          <li key={order._id}>
            Order #{order._id} - Total: ${order.total} - Status: {order.status}
            <ul>
              {order.products.map(product => (
                <li key={product.productId._id}>
                  {product.productId.name} - Quantity: {product.quantity}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
