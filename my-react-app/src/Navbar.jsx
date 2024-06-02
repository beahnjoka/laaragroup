// src/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import SignUp from './signup';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isSignUpOpen, setSignUpOpen] = useState(false);

  const openSignUpModal = () => {
    setSignUpOpen(true);
  };

  const closeSignUpModal = () => {
    setSignUpOpen(false);
  };

  return (
    <div className="navbar">
      <button className="menu-button" onClick={toggleMenu}>
        Menu
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <Link to="/">Home</Link>
          <Link to="/profile">My Profile</Link>
          <Link to="/login">Login</Link>
          <button className="signup-button" onClick={openSignUpModal}>Sign Up</button>
          <Link to="/list-your-home">List Your Home</Link>
          <Link to="/help-and-support">Help and Support</Link>
        </div>
      )}
      <SignUp isOpen={isSignUpOpen} onRequestClose={closeSignUpModal} />
    </div>
  );
};

export default Navbar;
