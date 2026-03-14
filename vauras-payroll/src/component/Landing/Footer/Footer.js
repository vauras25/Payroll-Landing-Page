import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { MessageCircle, Phone, Mail } from "lucide-react";
import logo from "../../../image/sbhome.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container-new">

        <div className="footer-grid">

          <div className="footer-brand">
            <div className="footer-logo">
              <NavLink to="/" end>
                <img src={logo} alt="SalaryBooks Logo" className="nav-logo" />
              </NavLink>
              <p className="footer-tagline">— Accurately Practical —</p>
            </div>

            <p className="footer-brand-desc">
              SALARYBOOKS provides automated payroll, HR compliance, and tax
              filing solutions for modern businesses. Simplify employee
              management, tax filing, and automated payouts with India's most
              trusted partner.
            </p>

            <div className="footer-contact">
              <div className="footer-contact-row">
                <Phone size={15} className="footer-contact-icon" />
                <p className="footer-contact-number">+91 9831776186 / 7605060596</p>
              </div>
              <div className="footer-contact-row">
                <Mail size={15} className="footer-contact-icon" />
                <p className="footer-contact-email">namaste@salarybooks.com</p>
              </div>
            </div>

            {/* <div className="footer-newsletter">
              <input
                type="email"
                placeholder="Newsletter"
                className="footer-newsletter-input"
              />
              <button className="footer-newsletter-btn">Subscribe</button>
            </div> */}
          </div>

          <div className="footer-col">
            <h4 className="footer-col-heading">Quick Links</h4>
            <ul className="footer-list">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/blogarticles" className="footer-link">Careers</a></li>
              <li><a href="/blogarticles" className="footer-link">Blog</a></li>
              {/* <li><a href="/testimonials" className="footer-link">Client Testimonials</a></li> */}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-heading">Our Services</h4>
            <ul className="footer-list">
              <li><a href="/blogarticles" className="footer-link">Automated Payroll</a></li>
              <li><a href="/blogarticles" className="footer-link"> Payslip Generator  </a></li>
              <li><a href="/blogarticles" className="footer-link">Expense Management</a></li>
              <li><a href="/blogarticles" className="footer-link">Tax & TDS Filing </a></li>
              <li><a href="/blogarticles" className="footer-link">  Employee Self-Service</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-heading">Support &amp; Resources</h4>
            <ul className="footer-list">
              <li><a href="/blogarticles" className="footer-link">Help Center</a></li>
              <li><a href="/blogarticles" className="footer-link">Product Demos</a></li>
              <li><a href="/contact" className="footer-link">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-middle-row">
          <div className="footer-badges">
            <div className="footer-badge">
              <span className="badge-label">ISO<br />27001</span>
            </div>
            <div className="footer-badge">
              <span className="badge-label">ISO</span>
            </div>
            <div className="footer-badge">
              <span className="badge-label">ISO</span>
            </div>
            <div className="footer-badge footer-badge--gdpr">
              <span className="badge-label">GDPR<br />COMPLIANT</span>
            </div>
            <div className="footer-badge footer-badge--ssl">
              <span className="badge-label">SSL<br />SECURE</span>
            </div>
          </div>

          <div className="footer-socials">
            <a href="https://www.linkedin.com/company/salarybooks/" className="footer-social-link" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://www.instagram.com/salarybooks/" className="footer-social-link" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/salarybooks/" className="footer-social-link" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-legal-row">
          <a href="/terms-of-use" className="footer-legal-link">Terms Of Use</a>
          <a href="/privacy-policy" className="footer-legal-link">Privacy Policy</a>
          <a href="/refund-policy" className="footer-legal-link">Refund Policy</a>
          <a href="/cancellation-policy" className="footer-legal-link">Cancellation Policy</a>
          {/* <a href="/sitemap" className="footer-legal-link">Sitemap</a> */}
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">©2024 Salarybooks. All rights reserved.</p>
        </div>

      </div>

      <div className="footer-deco-star">
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 0L31.5 28.5L60 30L31.5 31.5L30 60L28.5 31.5L0 30L28.5 28.5L30 0Z" fill="white" opacity="0.7" />
          <path d="M30 22L31 29L38 30L31 31L30 38L29 31L22 30L29 29L30 22Z" fill="white" />
        </svg>
      </div>

      <a href="/blogarticles" className="footer-whatsapp" aria-label="WhatsApp">
        <MessageCircle size={24} />
      </a>
    </footer>
  );
}

export default Footer;