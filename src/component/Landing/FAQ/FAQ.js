import React, { useState } from "react";
import "./FAQ.css";
import { X } from "lucide-react";
import faqImage from "../../../image/Web_Imgs/FAQ.png";

const FAQS = [
  { q: 'Which is the top payroll software in India?', a: 'SalaryBooks is the top payroll software India, praised for seamless compliance, automation, and affordability. It outshines competitors with integrated HR management software, real-time reporting, and dedicated support for Indian businesses.' },
  { q: 'Is there any free payroll software available in India?', a: 'Limited free payroll software exists, often with basic features and scalability issues. SalaryBooks offers a free trial of premium payroll software India, but fully free options lack advanced HR management software compliance for taxes and statutory filings.' },
  { q: 'What features should payroll software in India have?', a: 'Essential features include TDS/PF/ESI automation, payslip generation, attendance integration, and mobile access. Top payroll software India like SalaryBooks adds HR management software for leaves, appraisals, and multi-company support, ensuring regulatory compliance.' },
  { q: 'Can payroll software automate salary and tax calculations?', a: 'Yes, modern payroll software fully automates salary structures, deductions, taxes, and bonuses per Indian laws. SalaryBooks excels here, instantly computing TDS, PF, and gratuity with one-click statutory reports.' },
  { q: 'Is payroll software safe for Indian businesses?', a: 'Absolutely, reliable payroll software India uses AES-256 encryption, role-based access, and backups. SalaryBooks ensures data safety with ISO-certified security, GDPR compliance, and audit trails, protecting sensitive employee info from breaches.' },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-section">
      <div className="faq-container">

        <h2 className="faq-heading">
          Frequently<br />Asked Questions
        </h2>

        <div className="faq-list">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`faq-item ${isOpen ? "faq-item--open" : "faq-item--closed"}`}
              >
                <button
                  className="faq-question-btn"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="faq-question-text">{faq.q}</span>
                  <div className={`faq-toggle ${isOpen ? "faq-toggle--open" : "faq-toggle--closed"}`}>
                    {isOpen
                      ? <X size={24} className="faq-toggle-icon-x" />
                      : <span className="faq-toggle-plus">+</span>
                    }
                  </div>
                </button>

                <div className={`faq-answer ${isOpen ? "faq-answer--open" : ""}`}>
                  <p className="faq-answer-text">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="faq-image-wrapper">
        <img src={faqImage} alt="FAQ Illustration" className="faq-image" />
      </div>
    </section>
  );
}

export default FAQ;