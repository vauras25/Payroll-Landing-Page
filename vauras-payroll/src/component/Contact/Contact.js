import React from "react";
import "./style.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact us</h1>
      </div>
      <div className="contact-content">
        <div className="contact-form">
          <p className="contact-description">
            Contact us about anything related to our company or services. We'll do our best to get back to you as soon as possible.
          </p>
          <form>
            <label>Your Name *</label>
            <input type="text" placeholder="Enter your name" required />

            <label>Company Name *</label>
            <input type="text" placeholder="Enter company name" required />

            <label>Phone Number *</label>
            <input type="tel" placeholder="+91" required />

            <label>Your Email</label>
            <input type="email" placeholder="Enter your email" />

            <label>No. of Employees</label>
            <input type="number" placeholder="Number of employees" />

            <label>Your Question</label>
            <textarea placeholder="Write your question here"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contact-info">
          <h3>Reach us:</h3>
          <p><FaMapMarkerAlt /> 162/A/57 Lake Gardens, Kolkata - 700045</p>
          <p><FaPhoneAlt /> +91 7605060599</p>
          <p><FaPhoneAlt /> +91 98317766186</p>
          <p><FaEnvelope /> info@vauras.in</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;