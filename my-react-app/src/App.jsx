// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/logins/signup';
import Login from './components/logins/login';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Profile from './components/Home/profile';
import ListYourHome from './components/Home/ListYourHome';
import HelpAndSupport from './components/Home/HelpandSupport';
import Filters from './components/Navbar/Filters';
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
