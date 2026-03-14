import React, { useState } from "react";
import "./Dashboard.css";
import dashboardBgImage from "../../../image/Web_Imgs/dashboard-bg.png";
import dashboardImage from "../../../image/Desktop_80.jpg"
import Mob_img from "../../../image/Web_Imgs/Mob_img.png"
function Star() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="star-icon"
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

function Dashboard() {
  const [formData, setFormData] = useState({
    name: "", company: "", phone: "",
    email: "", employees: "", services: "", message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://contact.salarybooks.com/submit-contact-details", {
      // const res = await fetch("http://localhost:5000/submit-contact-details", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", company: "", phone: "", email: "", employees: "", services: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };
  return (
    <section className="dashboard-section">
      <div
        className="dashboard-bg-image"
        style={{ backgroundImage: `url(${dashboardBgImage})` }}
      />

      {/* <div className="dashboard-blob"></div> */}

      <div className="dashboard-container">
        <div className="dashboard-content">
          <h1 className="dashboard-title">PAYROLL SOFTWARE</h1>

          <h2 className="dashboard-subtitle">
            Free Forever Attendace,
            <br />
            HR &amp; Payroll Platform For
            <br />
            Unlimited Employees
          </h2>

          <p className="dashboard-trust">
            Trusted by 450+ companies &amp; 30,000+ Employees
          </p>

          <div className="dashboard-rating-row">
            <div className="dashboard-google-badge">
              <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.18 23.5c.3.17.64.2.96.1l11.5-11.5L12 8.46 3.18 23.5z" fill="#EA4335" />
                <path d="M20.5 10.5l-2.6-1.5-3.26 3.26 3.26 3.26 2.62-1.52a1.5 1.5 0 0 0 0-2.6z" fill="#FBBC05" />
                <path d="M3.18.5a1.5 1.5 0 0 0-.68 1.3v20.4a1.5 1.5 0 0 0 .68 1.3L12 15.54 3.18.5z" fill="#4285F4" />
                <path d="M4.14.1 15.64 11.6l-3.26 3.26L3.18 23.5c.3.17.64.2.96.1l16.36-9.44a1.5 1.5 0 0 0 0-2.6L4.14.1z" fill="#34A853" />
              </svg>

              <span style={{ fontWeight: 600, fontSize: "0.95rem", color: "#111827" }}>
                Google Play
              </span>

              <div className="google-divider"></div>

              <div>
                <div className="dashboard-stars">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <div className="dashboard-rating-score">&nbsp; 4.5</div>
                </div>
              </div>
            </div>

            <div className="dashboard-mockups">
              <div className="mockup-wide">
                {/* <div className="mockup-bar-blue"></div>
                <div className="mockup-bar-gray w-2-3"></div>
                <div className="mockup-bar-gray w-full"></div> */}
                <img src={dashboardImage} alt="Dashboard Preview" className="info-image" />
              </div>
              <div className="mockup-narrow">
                <img src={Mob_img} alt="Mobile App Preview" className="info-image" />
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-form-card">
          <form className="dashboard-form" onSubmit={handleSubmit}>
            <div className="dashboard-form-grid">
              <div className="form-group-new">
                <label className="form-label">Your Name *</label>
                <input type="text" name="name" value={formData.name}
                  onChange={handleChange} placeholder="Your Name" className="form-input-new" />
              </div>

              <div className="form-group-new">
                <label className="form-label">Company Name *</label>
                <input type="text" name="company" value={formData.company}
                  onChange={handleChange} placeholder="Company Name" className="form-input-new" />
              </div>

              <div className="form-group-new">
                <label className="form-label">Phone Number *</label>
                <input type="tel" name="phone" value={formData.phone}
                  onChange={handleChange} placeholder="Phone Number" className="form-input-new" />
              </div>

              <div className="form-group-new">
                <label className="form-label">Email Address *</label>
                <input type="email" name="email" value={formData.email}
                  onChange={handleChange} placeholder="Email Address" className="form-input-new" />
              </div>

              <div className="form-group-new">
                <label className="form-label">No. of Employees</label>
                <select name="employees" value={formData.employees}
                  onChange={handleChange} className="form-select">
                  <option value="">No. of Employees</option>
                  <option>1-10</option>
                  <option>11-50</option>
                  <option>51-200</option>
                  <option>200+</option>
                </select>
              </div>

              <div className="form-group-new">
                <label className="form-label">Services</label>
                <select name="services" value={formData.services}
                  onChange={handleChange} className="form-select">
                  <option value="" disabled>Select Service</option>
                  <option value="hr_payroll">HR &amp; Payroll</option>
                  <option value="only_payroll">Only Payroll</option>
                  <option value="only_hrms">Only HRMS</option>
                </select>
              </div>
            </div>

            <div className="form-group-new">
              <label className="form-label">Your Message</label>
              <textarea name="message" value={formData.message}
                onChange={handleChange} placeholder="Your Message"
                rows={3} className="form-textarea" />
            </div>

            {status === "success" && (
              <p style={{ color: "green", marginBottom: "0.5rem" }}>
                Form submitted successfully!
              </p>
            )}
            {status === "error" && (
              <p style={{ color: "red", marginBottom: "0.5rem" }}>
                Something went wrong. Please try again.
              </p>
            )}

            <button type="submit" className="form-submit-btn" disabled={status === "loading"}>
              {status === "loading" ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;