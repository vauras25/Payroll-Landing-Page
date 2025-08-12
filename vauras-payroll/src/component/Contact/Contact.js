import React , { useState } from "react";
import "./style.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

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

    // e.preventDefault();

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
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact us aman</h1>
      </div>
      <div className="contact-content">
        <div className="contact-form">
          <p className="contact-description">
            Contact us about anything related to our company or services. We'll do our best to get back to you as soon as possible.
          </p>
            <label>Your Name *</label>
            <input type="text" name="name" placeholder="Enter your name"   value={formData.name} onChange={handleChange} required />

            <label>Company Name *</label>
            <input type="text" name="company" placeholder="Enter company name"  value={formData.company} onChange={handleChange}  required />

            <label>Phone Number *</label>
            <input type="tel"  name="phone" placeholder="+91" value={formData.phone} onChange={handleChange} required />

            <label>Your Email</label>
            <input type="email" name="email" placeholder="Enter your email"  value={formData.email} onChange={handleChange} />

            <label>No. of Employees</label>
            <input type="number"  name="employees" placeholder="Number of employees"  value={formData.employees} onChange={handleChange}/>

            <label>Your Question</label>
            <textarea   name="question" placeholder="Write your question here"  value={formData.question} onChange={handleChange}></textarea>

            {/* <button type="submit">Submit</button> */}
             <button type="button" onClick={handleSubmit}>Submit</button>
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




