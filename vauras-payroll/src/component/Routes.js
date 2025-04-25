// src/Routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/Contact/Contact'; 
import About from './component/About/About';
import Support from './component/Support/Support';
import Services from './component/Services/Services';
import Career from './component/Career/Career';
import Pricing  from './component/Priceing/Priceing';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} /> 
       <Route path="/contact" element={<Contact />} /> 
       <Route path="/services" element={<Services />} /> 
       <Route path="/career" element={<Career />} /> 
       <Route path="/support" element={<Support />} /> 
       <Route path="/Pricing" element={<Pricing  />} /> 
    </Routes>
  );
};

export default AppRoutes;
