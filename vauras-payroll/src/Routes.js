// src/Routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/Contact/Contact'; 
import About from './component/About/About';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} /> 
       <Route path="/contact" element={<Contact />} /> 
    </Routes>
  );
};

export default AppRoutes;
