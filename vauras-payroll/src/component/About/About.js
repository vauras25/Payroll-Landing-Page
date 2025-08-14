import React from "react";
import "./About.css";
import payrollImg from "./aboutimage/aboutimg1.png"; // replace with your image path
import womanLaptopImg from "./aboutimage/aboutimg2.png"; // replace with your image path
import timeIcon from "./aboutimage/abouticon1.png"; // replace with your icon path
import accuracyIcon from "./aboutimage/abouticon2.png";
import expertIcon from "./aboutimage/abouticon3.png";
import securityIcon from "./aboutimage/abouticon4.png";

const AboutSection = () => {
  return (
    
    <section className="about-section">

       <section className="intro-section">
      <div className="introduction-text">
        <h1>
          <span className="brand">SalaryBooks</span> – A payroll software{" "}
          <span className="highlight">built for India</span>,<br />
            <span className="people">  by people who understand{" "}</span>
          <span className="highlight">Indian</span> payroll.
        </h1>
      </div>
    </section>
      <div className="intro-section">
        <div className="intro-text">
          {/* <h2>
            <span className="highlight">SalaryBooks</span> – A payroll software{" "}
            <span className="blue">built for India</span>, by people who
            understand <span className="blue">Indian payroll</span>.
          </h2> */}
          <p>
            It all started with a simple observation: payroll shouldn’t be this
            hard. As business owners and professionals, we saw countless
            companies — especially small and medium enterprises — struggling
            every month with salary calculations, compliance filings, and
            government regulations that changed from one state to another.
            Errors, delays, and penalties were common. The available tools were
            too complex, too expensive, or simply not made for the Indian
            market. That’s when we decided to create{" "}
            <strong>SalaryBooks</strong>.
          </p>
        </div>
        <div className="intro-image">
          <img src={payrollImg} alt="Payroll illustration" />
        </div>
      </div>

      <div className="mission-section">
        <div className="mission-image">
          <img src={womanLaptopImg} alt="Woman using laptop" />
        </div>
        <div className="mission-text">
          <p>
            At <strong>SalaryBooks</strong>, we believe payroll and compliance
            management should be effortless, accurate, and stress-free.
          </p>
          <p>
            Our cloud-based HR & payroll platform is designed to simplify every
            aspect of workforce management — from automated salary processing to
            seamless statutory compliance — so businesses can focus on{" "}
            <strong>growth, not paperwork</strong>.
          </p>
        </div>
      </div>

      <div className="why-us">
        <h2>Why US?</h2>
        <div className="why-us-icons">
          <div className="why-item">
            <img src={timeIcon} alt="Time saving" />
            <h4>Time-Saving Automation</h4>
          </div>
          <div className="why-item">
            <img src={accuracyIcon} alt="Accuracy" />
            <h4>Accuracy First</h4>
          </div>
          <div className="why-item">
            <img src={expertIcon} alt="Experts" />
            <h4>Experts of PF ESIC P.Tax</h4>
          </div>
          <div className="why-item">
            <img src={securityIcon} alt="Security" />
            <h4>Security You Can Trust</h4>
          </div>
        </div>
        <div className="why-us-details">
          <p>
            <strong>Automated Payroll Processing</strong> – Accurate salary
            calculations in minutes
          </p>
          <p>
            <strong>Integrated Compliance</strong> – Stay updated with
            ever-changing labor laws
          </p>
          <p>
            <strong>Real-Time Reports</strong> – Instant insights for smarter
            decision-making
          </p>
          <p>
            <strong>Anywhere Access</strong> – Manage payroll securely from any
            device
          </p>
          <p>
            <strong>User-Friendly Interface</strong> – No tech expertise
            required
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
