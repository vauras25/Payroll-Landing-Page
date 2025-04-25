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
    color: 'premium'
  },
  
  {
    type: 'Premium',
    price: '9,999',
    perEmployee: '₹100',
    maxEmployees: '50',
    features: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    sections: ['Core HR', 'Compliance', 'Employee Self-Service', 'Additional Features'],
    color: 'premium'
  },
  {
    type: 'Regular',
    price: '4,999',
    perEmployee: '₹60',
    maxEmployees: '50',
    features: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    sections: ['Core HR', 'Compliance', 'Employee Self-Service', 'Additional Features'],
    color: 'regular',
    recommended: true
  },
  {
    type: 'Regular',
    price: '4,999',
    perEmployee: '₹60',
    maxEmployees: '50',
    features: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    sections: ['Core HR', 'Compliance', 'Employee Self-Service', 'Additional Features'],
    color: 'regular',
    recommended: true
  },
  {
    type: 'Premium',
    price: '9,999',
    perEmployee: '₹100',
    maxEmployees: '50',
    features: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    sections: ['Core HR', 'Compliance', 'Employee Self-Service', 'Additional Features'],
    color: 'premium'
  },
  {
    type: 'Premium',
    price: '9,999',
    perEmployee: '₹100',
    maxEmployees: '50',
    features: ['Payroll Processing', 'Leave Management', 'Compensatory Off Management', 'Salary Increment', 'Bank Statement', 'Payroll MIS Reports'],
    sections: ['Core HR', 'Compliance', 'Employee Self-Service', 'Additional Features'],
    color: 'premium'
  }
];

const Priceing = () => {
  return (
    <div className="pricing-container">
      {plans.map((plan, index) => (
        <div
          className={`card ${plan.color} ${plan.recommended ? 'recommended' : ''}`}
          key={index}
        >
          {plan.recommended && <div className="badge">Recommended</div>}
          <div className="card-header">{plan.type}</div>
          <div className="price">₹ {plan.price}<span>/month</span></div>
          <p className="sub-text">
            (Up to {plan.maxEmployees} employees)<br />
            {plan.perEmployee}/month (Per additional employee)
          </p>
          <ul>
            <li><strong>Payroll</strong></li>
            {plan.features.map((feature, i) => (
              <li key={i}>✔ {feature}</li>
            ))}
          </ul>
          <ul>
            {plan.sections.map((section, i) => (
              <li key={i}><strong>{section}</strong></li>
            ))}
          </ul>
          <button className="cta">START FREE TRIAL</button>
        </div>
      ))}
    </div>
  );
};

export default Priceing;
