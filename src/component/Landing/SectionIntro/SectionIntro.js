import React from "react";
import "./SectionIntro.css";
import section2Image from "../../../image/Web_Imgs/Payroll.png"

function SectionIntro() {
  return (
    <section className="section-intro">
      <div className="section-intro-image-wrapper">
        <img
          src={section2Image}
          alt="Payroll System Illustration"
          className="section-intro-image"
        />
      </div>
      <div className="section-intro-content">
        <h3 className="section-intro-title">
          What is a Payroll Management System?
        </h3>
        <p className="section-intro-text">
          Payroll refers to the total compensation paid to employees, including
          salaries, wages, bonuses, and deductions. A payroll management system
          software streamlines this process, automating calculations for taxes,
          provident fund, and ESI. In India, reliable payroll software India
          options like SalaryBooks ensure compliance with local laws. Payroll
          software handles everything from attendance tracking to payslip
          generation, reducing errors and saving time for businesses.
        </p>
      </div>
    </section>
  );
}

export default SectionIntro;