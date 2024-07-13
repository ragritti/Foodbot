import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Mealmate</div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item">Menu</li>
          <li className="nav-item">Location</li>
          <li className="nav-item">About Us</li>
          <li className="nav-item">Contact Us</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
