import { React } from "react";
import { useNavigate } from "react-router-dom";
import "./footer.css";
import logo from "../../image/logo.png";


export default function Footer() {
    const navigate = useNavigate();
    function route() {
        navigate('/contact')
    }


    return (
        <>
            <div className="full-footer">
                <div className="Footer-full">
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

                    <div className="foot">
                        <a href="/terms-of-use" className="link-btn">Terms Of Use</a>
                        <a href="/privacy-policy" className="link-btn">Privacy Policy</a>
                        <a href="/refund-policy" className="link-btn">Refund Policy</a>
                        <a href="/cancellation-policy" className="link-btn">Cancellation Policy</a>
                    </div>

                    <div></div>
                    {/* Modal */}

                </div>
            </div>
        </>
    );
}
