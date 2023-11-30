import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Registration from './components/Registration';
import Login from './components/Login';
import Errorpage from './components/Errorpage';
import { Routes, Route } from 'react-router-dom';
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  );
};

export default App;
