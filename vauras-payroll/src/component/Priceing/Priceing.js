import React from 'react';
import './priceing.css';

const plans = [
  {
    type: 'Premium',
    price: '9,999',
    perEmployee: '₹100',
    maxEmployees: '50',
    features: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    sections: ['Core HR', 'Compliance', 'Employee Self-Service', 'Additional Features'],
    color: 'premium',
  },
  {
    type: 'Premium',
    price: '9,999',
    perEmployee: '₹100',
    maxEmployees: '50',
    features: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    sections: ['Core HR', 'Compliance', 'Employee Self-Service', 'Additional Features'],
    color: 'premium',
  },
  {
    type: 'Regular',
    price: '4,999',
    perEmployee: '₹60',
    maxEmployees: '50',
    features: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    sections: ['Core HR', 'Compliance', 'Employee Self-Service', 'Additional Features'],
    color: 'regular',
    recommended: true,
  },
  {
    type: 'Regular',
    price: '4,999',
    perEmployee: '₹60',
    maxEmployees: '50',
    features: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    sections: ['Core HR', 'Compliance', 'Employee Self-Service', 'Additional Features'],
    color: 'regular',
    recommended: true,
  },
  {
    type: 'Premium',
    price: '9,999',
    perEmployee: '₹100',
    maxEmployees: '50',
    features: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    sections: ['Core HR', 'Compliance', 'Employee Self-Service', 'Additional Features'],
    color: 'premium',
  },
  {
    type: 'Premium',
    price: '9,999',
    perEmployee: '₹100',
    maxEmployees: '50',
    features: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    sections: ['Core HR', 'Compliance', 'Employee Self-Service', 'Additional Features'],
    color: 'premium',
  },
];

const Pricing = () => {
  return (
    <div className="pricing-container">
      {plans.map((plan, index) => (
        <div
          className={`pricing-card ${plan.color} ${plan.recommended ? 'recommended' : ''}`}
          key={index}
        >
          {plan.recommended && <div className="badge">Recommended</div>}
          <div className="pricing-card-header">{plan.type}</div>
          <div className="pricing-price">₹ {plan.price}<span>/month</span></div>
          <p className="pricing-sub-text">
            (Up to {plan.maxEmployees} employees)<br />
            {plan.perEmployee}/month (Per additional employee)
          </p>
          <ul className="features-list">
            <li><strong>Payroll</strong></li>
            {plan.features.map((feature, i) => (
              <li key={i}>✔ {feature}</li>
            ))}
          </ul>
          <ul className="sections-list">
            {plan.sections.map((section, i) => (
              <li key={i}><strong>{section}</strong></li>
            ))}
          </ul>
          <button className="cta-button">START FREE TRIAL</button>
        </div>
      ))}
    </div>
  );
};

export default Pricing;
