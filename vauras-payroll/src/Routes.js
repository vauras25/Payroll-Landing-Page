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
import Login from './component/login/login';
import PrivacyPolicy from './component/New/Privacy_Policy/Privacy_Policy';
import RefundPolicy from './component/New/Refund_Policy/RefundPolicy'
import TermsUse from './component/New/Terms_Use/Terms_Use';
import CancellationPolicy from './component/New/Cancellation_Policy/Cancellation_Policy'
// import Pricing_New from './component/Pricing_New/Pricing_New'
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
        <Route path="/privacy-policy" element={<PrivacyPolicy  />} /> 
        <Route path="/refund-policy" element={<RefundPolicy  />} /> 
        <Route path="/terms-of-use" element={<TermsUse  />} /> 
        <Route path="/cancellation-policy" element={<CancellationPolicy  />} /> 
       {/* <Route path="/Pricing_New" element={<Pricing_New  />} />  */}
       <Route path="/login" element={<Login/>} />
    </Routes>
  );
};

export default AppRoutes;
