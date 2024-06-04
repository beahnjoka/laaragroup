// src/SignUp.jsx
import React, { useState } from 'react';
import Modal from 'react-modal';
import './signup.css';

Modal.setAppElement('#root');

const SignUp = ({ isOpen, onRequestClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { firstName, lastName, phoneNumber: `${countryCode}${phoneNumber}`, email, password };

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
    setPhoneNumber('');
    setCountryCode('+1');
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
        <div className="form-title">Sign up</div>
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
          <div className="phone-input">
            <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)} required>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+91">+91</option>
              {/* Add more country codes as needed */}
            </select>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
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
    </Modal>
  );
};

export default SignUp;
