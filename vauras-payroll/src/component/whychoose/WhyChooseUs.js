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
      <p className="text-center">
        Empowering your business with expert compliance and solutions for lasting
        satisfaction and growth.
      </p>
      {/* </div> */}

      <div className="row">
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
        <div className="image-column">
          <img src={img3} alt="Payroll illustration" />
        </div>
      </div>

      {/* Row 2 */}
      <div className="row reverse">
       
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
         <div className="image-column2">
          <img src={img4} alt="Compliance illustration" />
        </div>
      </div>

       <div className="row">
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
        <div className="image-columnby">
          <img src={img2} alt="Payroll illustration" />
        </div>
      </div>

       <div className="row reverse">
       
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
         <div className="image-column2">
          <img src={img5} alt="Compliance illustration" />
        </div>
      </div>

      <div className="row">
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
        <div className="image-column">
          <img src={img1} alt="Payroll illustration" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
