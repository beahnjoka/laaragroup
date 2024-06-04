// src/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import SignUp from './signup';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openSignUpModal = () => {
    setSignUpOpen(true);
  };

  const closeSignUpModal = () => {
    setSignUpOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="navbar">
      <button className="menu-button" onClick={toggleMenu}>
        Menu
      </button>
      {isOpen && (
        <div ref={menuRef} className="dropdown-menu">
          <Link to="/">Home</Link>
          <Link to="/profile">My Profile</Link>
          <Link to="/login">Login</Link>
          <button className="menu-link" onClick={openSignUpModal}>Sign Up</button>
          <Link to="/list-your-home">List Your Home</Link>
          <Link to="/help-and-support">Help and Support</Link>
        </div>
      )}
      <SignUp isOpen={isSignUpOpen} onRequestClose={closeSignUpModal} />
    </div>
  );
};

export default Navbar;
