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
      <Link to="/" className="logo-link">
        <img
          src="https://a6ac9d2e70b25f5b91b1f436d0f800f3.cdn.bubble.io/f1713297328630x377789177477646700/Web%20logo.svg"
          alt="Logo"
          className="logo"
        />
      </Link>
      <div className="navbar-right">
        <Link to="/hosting" className="hosting-link">
          Switch to Hosting
          <img
            src="https://cdn-icons-png.freepik.com/256/6234/6234658.png?semt=ais_hybrid"
            alt="Hosting Icon"
            className="hosting-icon"
          />
        </Link>
        <img
          src="https://img.icons8.com/?size=50&id=25620&format=png"
          alt="Profile"
          className="profile-picture"
          onClick={toggleMenu}
        />
      </div>
      {isOpen && (
        <div ref={menuRef} className="dropdown-menu">
          <Link to="/">Home</Link>
          <Link to="/profile">My Profile</Link>
          <Link to="/login">Login</Link>
          <a href="#" onClick={openSignUpModal}>Sign Up</a>
          <Link to="/list-your-home">List Your Home</Link>
          <Link to="/help-and-support">Help and Support</Link>
        </div>
      )}
      <SignUp isOpen={isSignUpOpen} onRequestClose={closeSignUpModal} />
    </div>
  );
};

export default Navbar;
