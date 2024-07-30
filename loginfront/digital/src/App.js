import React from 'react';
import Products from './Products';
import Cart from './Cart';
import Orders from './Orders';

const App = () => {
  return (
    <div>
      <h1>E-commerce Dashboard</h1>
      <Products />
      <Cart />
      <Orders />
    </div>
  );
};

export default App;
