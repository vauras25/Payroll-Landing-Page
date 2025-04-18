import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Vauras Advisory Services Pvt. Ltd.</h1>

        <p className="about-paragraph">
          At <strong>Vauras Advisory Services Pvt. Ltd.</strong>, we specialize in delivering comprehensive compliance and HR solutions tailored to meet the unique needs of businesses across industries. Our core services focus on:
        </p>

        <ul className="about-list">
          <li><strong>ESIC (Employees' State Insurance Corporation) Compliance</strong></li>
          <li><strong>PF (Provident Fund) Consultancy & Management</strong></li>
          <li><strong>Payroll Outsourcing Services</strong></li>
          <li><strong>Labour Law Compliance and Advisory</strong></li>
        </ul>

        <p className="about-paragraph">
          With years of experience and an expert team, we help businesses stay compliant with ever-evolving statutory requirements while streamlining internal processes. Our goal is to eliminate the complexity of HR & statutory tasks, allowing you to focus on what matters most—growing your business.
        </p>

        <p className="about-paragraph">
          We work closely with clients to ensure accuracy, timeliness, and transparency in all aspects of statutory filings, employee benefits, and payroll management. Whether you're a startup, SME, or a large enterprise, Vauras Advisory is your trusted compliance and HR partner.
        </p>

        <p className="about-quote">
          Empowering Compliance. Enabling Growth.
        </p>
      </div>
    </div>
  );
};

export default About;
