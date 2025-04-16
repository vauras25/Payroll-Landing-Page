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
          <div>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.9159816571437!2d88.35479882718931!3d22.5073352690767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270da22bec5cd%3A0x9c9f5c7db304ee92!2sVauras%20Advisory%20Services%20Pvt.%20Ltd.%20%7C%20ESIC%20%26%20PF%20Consultant%20%7C%20Payroll%20Outsourcing%20%7C%20Labour%20Compliance%20%7C!5e0!3m2!1sen!2sin!4v1744787640644!5m2!1sen!2sin" width="600" height="450"  allowFullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

            <iframe
              title="Vauras Advisory Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.9159816571437!2d88.35479882718931!3d22.5073352690767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270da22bec5cd%3A0x9c9f5c7db304ee92!2sVauras%20Advisory%20Services%20Pvt.%20Ltd.%20%7C%20ESIC%20%26%20PF%20Consultant%20%7C%20Payroll%20Outsourcing%20%7C%20Labour%20Compliance%20%7C!5e0!3m2!1sen!2sin!4v1744787640644!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;