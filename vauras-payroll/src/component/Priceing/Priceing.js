import React from 'react';
import './priceing.css';

const plans = [
  {
    type: 'Premium',
    price: '9,999',
    perEmployee: '₹100',
    maxEmployees: '50',
    features1: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    features2: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    features3: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    features4: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    features5: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    sections: [ 'Compliance', 'Employee Self-Service', 'Additional Features'],
    color: 'premium',
  },
  {
    type: 'Premium',
    price: '9,999',
    perEmployee: '₹100',
    maxEmployees: '50',
    features1: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    features2: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    features3: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    features4: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    features5: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    
    color: 'premium',
  },
  {
    type: 'Regular',
    price: '4,999',
    perEmployee: '₹60',
    maxEmployees: '50',
    features1: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    features2: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    features3: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    features4: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    features5: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
   
    color: 'regular',
    recommended: true,
  },
  {
    type: 'Regular',
    price: '4,999',
    perEmployee: '₹60',
    maxEmployees: '50',
    features1: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    features2: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    features3: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    features4: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    features5: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
   
    color: 'regular',
    recommended: true,
  },
  {
    type: 'Premium',
    price: '9,999',
    perEmployee: '₹100',
    maxEmployees: '50',
    features1: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    features2: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    features3: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    features4: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    features5: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    
    color: 'premium',
  },
  {
    type: 'Premium',
    price: '9,999',
    perEmployee: '₹100',
    maxEmployees: '50',
    features1: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    features2: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    features3: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    features4: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    features5: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    
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
          <div className="pricing-card-header"><strong>{plan.type}</strong></div>
          <div className="pricing-price">₹ {plan.price}<span>/month</span></div>
          <strong><p className="pricing-sub-text">
            (Up to {plan.maxEmployees} employees)<br />
            {plan.perEmployee}/month (Per additional employee)
          </p></strong>
          <ul className="features-list">
            <li><strong>Payroll</strong></li>
            {plan.features1.map((feature, i) => (
              <li key={i}>✔ {feature}</li>
            ))}
          </ul>
          <ul className="features-list">
            <li><strong>Core HR</strong></li>
            {plan.features2.map((feature, i) => (
              <li key={i}>✔ {feature}</li>
            ))}
          </ul>
          <ul className="features-list">
            <li><strong>Compliance</strong></li>
            {plan.features3.map((feature, i) => (
              <li key={i}>✔ {feature}</li>
            ))}
          </ul>
          <ul className="features-list">
            <li><strong>Employee Self-Service</strong></li>
            {plan.features4.map((feature, i) => (
              <li key={i}>✔ {feature}</li>
            ))}
          </ul>
          <ul className="features-list">
            <li><strong>Additional Features</strong></li>
            {plan.features4.map((feature, i) => (
              <li key={i}>✔ {feature}</li>
            ))}
          </ul>
          
          <button className="cta-button">START FREE TRIAL</button>
        </div>
      ))}
    </div>
  );
};

export default Pricing;
