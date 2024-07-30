import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './Products';
import Orders from './Orders';
import Cart from './Cart';
import Register from './Register';
import Login from './Login';
import Navbar from './Navbar';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
