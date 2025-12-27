import React , { useState } from "react";
import "./style.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useLocation } from "react-router-dom";


const Contact = () => {
    const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    employees: "",
    question: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const { name, company, phone } = formData;

    if (!name || !company || !phone) {
      alert("Please fill in all required fields: Name, Company Name, and Phone Number.");
      return;
    }

    try {
      // const response = await fetch("http://localhost:8080/contact", {

      const response = await fetch("https://contact.salarybooks.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // alert("  submitted.");
        setFormData({
          name: "",
          company: "",
          phone: "",
          email: "",
          employees: "",
          question: "",
        });
      } else {
        alert(` Something went wrong: ${data.error || "Please try again."}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }
  };

  const location = useLocation();
  console.log(location.pathname);

  return (
     <>
     {location.pathname === "/Contact" && (
        <div className="contact-blue-banner">
          <h2>Contact Us</h2>
        </div>
      )}
    <div className="contact-container">
      {location.pathname !== "/Contact" && (
      <div className="contact-header">
        <h2 className="text-center">Contact us</h2>
      </div>
      )}
      <div className="contact-content">
        {/* This is the single parent container */}
        <div className="contact-inner">
          
          {/* Left side: Contact Form */}
          <div className="contact-form">
            <p className="contact-description">
              Contact us about anything related to our company or services.<br />
              We'll do our best to get back to you as soon as possible.
            </p>

            <form className="form">
              <div className="form-group">
                <label>Your Name <span className="required">*</span></label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Company Name <span className="required">*</span></label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Phone Number <span className="required">*</span></label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Your Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>No. of Employees</label>
                <input type="number" name="employees" value={formData.employees} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>Your Question</label>
                <textarea name="question" rows="4" value={formData.question} onChange={handleChange}></textarea>
              </div>

               <div>
                 <button type="button" onClick={handleSubmit}><span>Submit</span></button>
               </div>
            </form>
          </div>

          {/* Right side: Contact Info */}
          <div className="contact-info">
            {/* <h3>Reach us:</h3> */}
            <p>Reach us:</p>
            <p> <FaMapMarkerAlt /> 162/A/57 Lake Gardens, Kolkata - 700045</p>
            <p><FaPhoneAlt /> +91  7605060599</p>
            <p><FaPhoneAlt /> +91 9831776186</p>
            <p><FaEnvelope /> namaste@salarybooks.com</p>

            <div className="map-wrapper">
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


    </div>
  </>
  );
};

export default Contact;




