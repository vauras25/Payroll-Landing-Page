import {React} from "react";
import { useNavigate } from "react-router-dom";
import "./footer.css";
import logo from "../../image/logo.png";

export default function Footer() {
    const navigate = useNavigate();
    function route(){
        navigate('/contact')
    }
  return (
    <div className="contact-section">
      {/* Left - Call us */}
      <div className="contact-item1">
        <strong>
            <h4>Call us at:</h4>
        <p>+91 9831776186</p>
        <p>+91 7605060596</p>
        </strong>
      </div>

      {/* Center - Logo */}
      <div className="contact-logo">
        <img src={logo} alt="Salary Books Logo" />
      </div>

      {/* Right - Email */}
      <div className="contact-item2">
        <h4>Send us a message</h4>
        <p className="email">namaste@salarybooks.com</p>
        <button className="contact-btn" onClick={route}>GET IN TOUCH</button>
      </div>
    </div>
  );
}
