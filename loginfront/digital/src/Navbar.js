// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          E-Commerce
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/products" className="navbar-link">Products</Link>
          </li>
          <li className="navbar-item">
            <Link to="/orders" className="navbar-link">Orders</Link>
          </li>
          <li className="navbar-item">
            <Link to="/cart" className="navbar-link">Cart</Link>
          </li>
          <li className="navbar-item">
            <Link to="/register" className="navbar-link">Register</Link>
          </li>
          <li className="navbar-item">
            <Link to="/login" className="navbar-link">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
