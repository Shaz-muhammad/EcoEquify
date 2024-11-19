// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css'; // Import the external CSS for the navbar

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          EcoEquify
        </Link>

        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
          <li>
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/learn" className="navbar-link">
              Learn
            </Link>
          </li>
          <li>
            <Link to="/assessment" className="navbar-link">
              Assessment
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="navbar-link">
              Implement
            </Link>
          </li>

          <li>
            <Link to="/support" className="navbar-link">
              Support
            </Link>
          </li>
        </ul>

        <div className="navbar-login">
          <Link to="/login" className="navbar-login-button">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
