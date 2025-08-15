import React from "react";
import "./WhyChooseUs.css";
import img1 from "../../image/img1.png"; // Replace with actual image paths
import img2 from "../../image/img2.png";
import img3 from "../../image/img3.png";
import img4 from "../../image/img4.png";
import img5 from "../../image/img5.png";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      {/* <div className="title"> */}
      <h2 className="text-center">Why Choose Us ?</h2>
      {/* </div> */}
       {/* <div className="subtitle"> */}
      <p className="text-center">``
        Empowering your business with expert compliance and solutions for lasting
        satisfaction and growth.
      </p>
      {/* </div> */}

      <div className="row">
        <div className="image-column">
          <img src={img3} alt="Payroll illustration" />
        </div>
        <div className="text-column">
          <div className="text-block">
            <h3>Built for Indian Businesses</h3>
            <p>
              SalaryBooks is designed with Indian regulations and business
              practices at its core—not as an afterthought.
            </p>
          </div>
          <div className="text-block">
            <h3>Backed and Built by Compliance and Payroll Experts</h3>
            <p>
              The platform combines deep industry knowledge with advanced
              technology to ensure accurate calculations, seamless statutory
              adherence, and reliable payroll processing every time.
            </p>
          </div>
        </div>
        
      </div>

      {/* Row 2 */}
      <div className="row reverse">
       <div className="image-column2">
          <img src={img4} alt="Compliance illustration" />
        </div>
        <div className="text-column">
          <div className="text-block">
            <h3>Dedicated Support & Onboarding</h3>
            <p>
              We don’t just give you software—we guide you every step of the way.
              From data migration to employee onboarding, our team ensures a
              smooth setup and ongoing support.
            </p>
          </div>
          <div className="text-block">
            <h3>Transparent, Affordable Pricing</h3>
            <p>
              SalaryBooks’ plans let you pay only for what you use — simple,
              transparent, and cost-efficient for startups, SMEs, and
              enterprises.
            </p>
          </div>
        </div>
         
      </div>

       <div className="row">
        <div className="image-columnby">
          <img src={img2} alt="Payroll illustration" />
        </div>
        <div className="text-column">
          <div className="text-block">
            <h3>End-to-End Payroll Automation
            </h3>
            <p>
            Automate everything from salary calculations and deductions to payslip generation, compliance, and bank transfers—accurately and on time.
            </p>
          </div>
          <div className="text-block">
            <h3>Fully Compliant, Always Updated</h3>
            <p>
            With built-in support for PF, ESI, TDS, PT, and more, SalaryBooks ensures you’re always in line with the vast and confusing Indian Legal & Compliance landscape. We track compliance, so you sleep peacefully.
            </p>
          </div>
        </div>
        
      </div>

       <div className="row reverse">
         <div className="image-column2">
          <img src={img5} alt="Compliance illustration" />
        </div>
        <div className="text-column">
          <div className="text-block">
            <h3>Secure & Cloud-Based</h3>
            <p>
            Access your payroll data securely from anywhere, anytime. Bank-grade encryption, automated backups, and strict role-based access controls keep your data safe and confidential.
            </p>
          </div>
          <div className="text-block">
            <h3>Employee-Friendly Portal</h3>
            <p>
            Empower your team with self-service access to payslips, tax info, leave balances, and more. Fewer questions and more time for HR. More clarity for employees. App & Web version also available for the employee mobile app.
            </p>
          </div>
        </div>
       
      </div>

      <div className="row">
        <div className="image-columnpay">
          <img src={img1} alt="Payroll illustration" />
        </div>
        <div className="text-column">
          <div className="text-block">
            <h3>Scalable for Growth</h3>
            <p>
             Whether you have 5 employees or 500 across multiple locations, SalaryBooks grows with your business. Add branches, customize salary structures, and handle bulk updates with ease.
            </p>
          </div>
          <div className="text-block">
            <h3>Trusted by Businesses Across India</h3>
            <p>
              Join a growing community of forward-thinking businesses that trust SalaryBooks to simplify their payroll and compliance. Our clients span industries like IT, manufacturing, healthcare, education, and more—united by a common goal: stress-free payroll.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default WhyChooseUs;
