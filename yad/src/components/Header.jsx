import React, { useState } from 'react';
import { Menu, X, Phone, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <h1>Yadav <span>Milk</span></h1>
        </div>

        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#products" onClick={() => setIsMenuOpen(false)}>Products</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>

        <div className="header-actions">
          <a href="tel:8008959608" className="btn-icon" aria-label="Call Us">
            <Phone size={20} />
          </a>
          <button className="btn-icon" aria-label="Cart">
            <ShoppingCart size={20} />
          </button>
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
