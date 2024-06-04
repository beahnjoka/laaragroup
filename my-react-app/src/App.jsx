// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './signup';
import Login from './login';
import Navbar from './Navbar';
import Home from './Home';
import Profile from './profile';
import ListYourHome from './ListYourHome';
import HelpAndSupport from './HelpandSupport';
import Filters from './Filters';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
         <Filters/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/list-your-home" element={<ListYourHome />} />
          <Route path="/help-and-support" element={<HelpAndSupport />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
