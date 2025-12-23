import React from 'react';
import { FiSearch, FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <nav>
        <ul>
          <li><a href="#shop">SHOP</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#stories">STORIES</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#contact">CONTACT US</a></li>
        </ul>
      </nav>
      <div className="header-icons">
        <FiSearch className="icon" />
        <FiHeart className="icon" />
        <FiShoppingCart className="icon" />
        <FiUser className="icon" />
        <span className="lang-selector">ENG ▼</span>
      </div>
    </header>
  );
}

export default Header;