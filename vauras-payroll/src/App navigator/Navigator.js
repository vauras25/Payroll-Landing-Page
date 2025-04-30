import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './AppNavigator.css';
import { FaBars } from 'react-icons/fa';
import logo from '../image/logo.png'; // Adjust path if needed
 
const Navigator = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo-container">
        <NavLink to="/" end>
          <img src={logo} alt="Logo" className="nav-logo" />
        </NavLink>
      </div>

      {/* Hamburger Menu */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars className="menu-icon" />
      </div>

      {/* Navigation Links */}
      <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
        <li className="nav-item">
          <NavLink to="/" className="nav-link" end>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Services" className="nav-link">
            Services
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Career" className="nav-link">
            Career
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/support" className="nav-link">
            Support
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Contact" className="nav-link">
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Pricing" className="nav-link">
          Pricing
          </NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/login" className="nav-link">
          Login
          </NavLink>
          {/* <a href="https://vauras.cloud/login" className="nav-link" target="_blank" rel="noopener noreferrer">
            Login
          </a> */}
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;