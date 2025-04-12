import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Vauras Advisory Services Pvt. Ltd.</h1>
        <p>Your trusted partner in business transformation and financial growth.</p>
      </div>

      <div className="about-section">
        <h2>Who We Are</h2>
        <p>
          Vauras Advisory Services Pvt. Ltd. is a premier consultancy firm dedicated to delivering
          tailored business solutions and strategic financial advisory. We empower businesses to grow,
          innovate, and thrive in a dynamic market.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          To support businesses across industries by providing insightful, effective, and growth-oriented
          advisory services. We aim to simplify complexities and bring sustainable solutions that align
          with our clients’ long-term objectives.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Vision</h2>
        <p>
          To be recognized as a catalyst for business excellence and financial integrity, driving
          measurable impact for our clients worldwide.
        </p>
      </div>

      <div className="about-section">
        <h2>Core Values</h2>
        <ul>
          <li><strong>Integrity:</strong> We uphold the highest standards of honesty and professionalism.</li>
          <li><strong>Innovation:</strong> We believe in modern solutions for modern challenges.</li>
          <li><strong>Client-Centric:</strong> Your success is our success.</li>
          <li><strong>Excellence:</strong> We strive for quality and continuous improvement in all we do.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
