// src/SignUp.jsx
import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './signup.css';

Modal.setAppElement('#root');

const SignUp = ({ isOpen, onRequestClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { firstName, lastName, phone, email, password };

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Check if user already exists
    const response = await fetch(`http://localhost:3000/users?email=${email}`);
    const existingUsers = await response.json();

    if (existingUsers.length > 0) {
      setError("User with this email already exists!");
      return;
    }

    // If user doesn't exist, create a new user
    await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    setFirstName('');
    setLastName('');
    setPhone('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="Modal" overlayClassName="Overlay">
      <div className="signup-header">
        <div className="signup-title">LAARA</div>
        <div className="signup-subtitle">Create Your Account</div>
      </div>
      <form className="sign-up-form" onSubmit={handleSubmit}>
      
        {error && <div className="form-error">{error}</div>}
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <PhoneInput
            country={'us'}
            value={phone}
            onChange={setPhone}
            inputStyle={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              marginLeft: '20px'
            }}
            containerStyle={{
              width: '95%',
              marginLeft: '10px'
            }}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      <div className="signin-option">
        Already have an account? <Link to="/login" className="signin-link">Login</Link>
      </div>
    </Modal>
  );
};

export default SignUp;
