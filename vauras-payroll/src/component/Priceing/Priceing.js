import React, { useState } from 'react';
import './priceing.css';
import logo1 from './image/logo2.png';

const plans = [
  {
    name: 'Salary Books',
    type: 'Premium',
    price: '9,999',
    perEmployee: '₹100',
    maxEmployees: '50',
    sections: [
      { title: 'Payroll', features: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'] },
      { title: 'Core HR', features: ['Employee Information Management', 'Letters & Forms'] },
      { title: 'Compliance', features: ['Statutory Compliance', 'PF, ESI, PT management'] },
      { title: 'Employee Self-Service', features: ['Payslip Download', 'Leave Application'] },
      { title: 'Additional Features', features: ['Custom Reports', 'Analytics Dashboard'] },
    ],
    color: 'premium1',
  },
  {
    name: 'Salary Books',
    type: 'Premium',
    price: '9,999',
    perEmployee: '₹100',
    maxEmployees: '50',
    sections: [
      { title: 'Payroll', features: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'] },
      { title: 'Core HR', features: ['Employee Information Management', 'Letters & Forms'] },
      { title: 'Compliance', features: ['Statutory Compliance', 'PF, ESI, PT management'] },
      { title: 'Employee Self-Service', features: ['Payslip Download', 'Leave Application'] },
      { title: 'Additional Features', features: ['Custom Reports', 'Analytics Dashboard'] },
    ],
    color: 'premium2',
  },
  {
    name: 'Salary Books',
    type: 'Regular',
    price: '4,999',
    perEmployee: '₹60',
    maxEmployees: '50',
    sections: [
      { title: 'Payroll', features: ['Payroll Processing', 'Leave Management'] },
      { title: 'Core HR', features: ['Employee Information Management'] },
      { title: 'Compliance', features: [] },
      { title: 'Employee Self-Service', features: ['Payslip Download'] },
      { title: 'Additional Features', features: [] },
    ],
    color: 'regular1',
    recommended: true,
  },
  {
    name: 'Final Payroll',
    type: 'Regular',
    price: '4,999',
    perEmployee: '₹60',
    maxEmployees: '50',
    sections: [
      { title: 'Payroll', features: ['Payroll Processing', 'Leave Management'] },
      { title: 'Core HR', features: ['Employee Information Management'] },
      { title: 'Compliance', features: [] },
      { title: 'Employee Self-Service', features: ['Payslip Download'] },
      { title: 'Additional Features', features: [] },
    ],
    color: 'regular2',
    recommended: true,
  },
  {
    name: 'Final Payroll',
    type: 'Premium',
    price: '9,999',
    perEmployee: '₹100',
    maxEmployees: '50',
    sections: [
      { title: 'Payroll', features: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'] },
      { title: 'Core HR', features: ['Employee Information Management', 'Letters & Forms'] },
      { title: 'Compliance', features: ['Statutory Compliance', 'PF, ESI, PT management'] },
      { title: 'Employee Self-Service', features: ['Payslip Download', 'Leave Application'] },
      { title: 'Additional Features', features: ['Custom Reports', 'Analytics Dashboard'] },
    ],
    color: 'premium3',
  },
  {
    name:'TPP Outsourcing',
    type: 'Premium',
    price: '9,999',
    perEmployee: '₹100',
    maxEmployees: '50',
    sections: [
      { title: 'Payroll', features: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'] },
      { title: 'Core HR', features: ['Employee Information Management', 'Letters & Forms'] },
      { title: 'Compliance', features: ['Statutory Compliance', 'PF, ESI, PT management'] },
      { title: 'Employee Self-Service', features: ['Payslip Download', 'Leave Application'] },
      { title: 'Additional Features', features: ['Custom Reports', 'Analytics Dashboard'] },
    ],
    color: 'premium4',
  },
];

const Pricing = () => {
  const [expandedSections, setExpandedSections] = useState(
    plans.reduce((acc, _, index) => ({ ...acc, [index]: 'Payroll' }), {})
  );

  const toggleSection = (cardIndex, sectionTitle) => {
    setExpandedSections(prev => ({
      ...prev,
      [cardIndex]: prev[cardIndex] === sectionTitle ? null : sectionTitle,
    }));
  };

  return (
    <div className="pricing-container">
      {plans.map((plan, index) => (
        <div className={`pricing-card ${plan.color} ${plan.recommended ? 'recommended' : ''}`} key={index}>
          <img className="pricing-photo" src={logo1} alt="Logo" />
          <div className="pricing-card-name" style={{color: plan.color===`regular1` || plan.color===`regular2`? `white`:`black`}} ><strong>{plan.name}</strong></div>
          <div className="pricing-card-header" style={{color: plan.color===`regular1` || plan.color===`regular2`? `white`:`black`}}><strong>{plan.type}</strong></div>
          <div className="pricing-price">₹ {plan.price}<span>/month</span></div>
          <strong>
            <p className="pricing-sub-text">
              (Up to {plan.maxEmployees} employees)<br />
              {plan.perEmployee}/month (Per additional employee)
            </p>
          </strong>

          <div className="pricing-head">
            {plan.sections.map((section, secIndex) => (
              <div key={secIndex}>
                <button
                  className={`toggle-button ${expandedSections[index] === section.title ? 'expanded' : ''}`}
                  onClick={() => toggleSection(index, section.title)}
                >
                  {section.title}
                </button>
                {expandedSections[index] === section.title && (
                  <ul className="features-list">
                    {section.features.length > 0 ? (
                      section.features.map((feature, featIndex) => (
                        <li key={featIndex}><li className="tik">✔ </li> {feature}</li>
                      ))
                    ) : (
                      <li>No features available.</li>
                    )}
                  </ul>
                )}
              </div>
            ))}

            <button className="cta-button">Demo</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pricing;
