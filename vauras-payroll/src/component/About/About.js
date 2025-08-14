import React from "react";
import "./About.css";
import payrollImg from "./aboutimage/aboutimg1.png"; // replace with your image path
import womanLaptopImg from "./aboutimage/aboutimg2.png"; // replace with your image path
import timeIcon from "./aboutimage/abouticon1.png"; // replace with your icon path
import accuracyIcon from "./aboutimage/abouticon2.png";
import expertIcon from "./aboutimage/abouticon3.png";
import securityIcon from "./aboutimage/abouticon4.png";
import reason from "./aboutimage/aboutimg3.png";
import family from "./aboutimage/aboutimg4.png";


const AboutSection = () => {

  const cards = [
    {
      title: "Manual Payroll Was Slow, Error-Prone, and Stressful",
      text: "SalaryBooks automates salary calculations, tax deductions, and report generation—saving time and reducing costly errors.",
    },
    {
      title: "India Needed a Future–Ready Payroll System",
      text: "Businesses now need cloud access, automation, role-based controls, and remote capabilities. SalaryBooks is cloud-first, secure, scalable, and designed to India.",
    },
    {
      title: "Employee Experience Was Being Ignored Before",
      text: "Employees once waited for payslips and lacked attendance or leave info. SalaryBooks’ portal gives real-time access, boosting satisfaction.",
    },
  ];
  const cards2 = [
    {
      title: "The Tools in the Market Didn’t Fit Indian Needs",
      text: "Global payroll tools are pricey and generic & local ones clunky or outdated. SalaryBooks is designed for Indian businesses—affordable, easy to use, and packed with compliance-ready features.",
    },
    {
      title: "Compliance Was a Constant Headache",
      text: "India’s labor laws are complex and frequently updated. SalaryBooks stays up to date with the latest statutory requirements so businesses don’t face penalties, notices, or legal issues.",
    },
    {
      title: "We Lived the Problem Ourselves",
      text: "India’s labor laws are complex and frequently updated. SalaryBooks stays up to date with the latest statutory requirements so businesses don’t face penalties, notices, or legal issues.",
    },
    {
      title: "SMEs Deserved the Same Efficiency as Large Enterprises",
      text: "Big companies have access to costly HR suites. But small businesses lacked the tools to match that efficiency. SalaryBooks levels the playing field.",
    },
  ];

  return (
    <>
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

        <div className="why-us-section">
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
          <div className="with">
            <p>
              With SalaryBooks, businesses of all sizes — from startups to large enterprises — gain a smarter, faster, and more transparent way to manage their employees.
            </p>
          </div>
        </div>
      </section>

      <section className="why-built-section">
        <h3 className="subtitle"><strong>The reason</strong></h3>
        <h2 className="title">
          <span> Why We Built SalaryBooks?</span>
        </h2>
        <div class="row">
          <div class="why-text column">
            <p>
              Managing payroll manually or through <strong>spreadsheets is time-consuming and error-prone.</strong>
            </p>
            <p>
              Our team saw first-hand how small and medium-sized businesses struggle with compliance, monthly filings, and payslip generation. So, we built SalaryBooks to take that burden off your shoulders—giving you a reliable, compliant, and scalable solution.
            </p>
            <p><strong>Payroll in India is broken. We fixed it.</strong></p>
          </div>

          <div class="why-image column">
            <img src={reason} alt="SalaryBooks illustration"></img>
          </div>
        </div>

         <div className="cards-container">
        {cards.map((card, idx) => (
          <div className="card" key={idx}>
            <h4>{card.title}</h4>
            <p>{card.text}</p>
          </div>
        ))}
       
      </div> 
      <div class="familyimage">
            <img src={family} alt="SalaryBooks illustration"></img>
          </div>
      <div className="cards-container2">
        {cards2.map((card, idx) => (
          <div className="card2" key={idx}>
            <h4>{card.title}</h4>
            <p>{card.text}</p>
          </div>
        ))}
      </div> 
      </section>
    </>
  );
};

export default AboutSection;
