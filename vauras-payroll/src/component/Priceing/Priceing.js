import React, { useState } from 'react';
import './priceing.css';
import logo1 from './image/sbhome.png';
import logo2 from '../../image/mobile-illustration.png';
// import Footer from '../footer/footer';
const plans = [
  {
    name: 'Salary Books',
    type: 'ESSENTIALS',
    price: '1800',
    perEmployee: '₹60',
    maxEmployees: '30',
    content: "Essential features to get started",
    sections: [
      {
        features: [
          'Dashboard',
          'Employee Management',
          'Attendance Management',
          {
            name: 'Salary Management',
            subFeatures: [
              'Run Payroll',
              'Pay Slip',
              'Salary Report'
            ]
          },
          {
            name: 'Salary Revision',
            subFeatures: [
              'Apply Revision',
              'Revision Report'
            ]
          },

          'Overtime',
          {
            name: 'Leave Management',
            subFeatures: [
              'Leave Reports',
              'Leave Ledger'
            ]
          },
          
          'Payment Instructions',
            {
            name: 'Compliance',
            subFeatures: [
              'PF Report',
              'ESI Report',
              'Bulk KYC Upload File'

            ]
          },
          
          'Payroll Reports',
          'Attendance Report',
          'Salary Report',
          'Revision Report',
          'Arrear Earning Report',
          'Overtime Report',
          'Full & Final Report',
          'PF Report',
          'ESIC Report',
          'Govt. Forms & Registers',
           {
            name: 'Invoice',
            subFeatures: [
              'Invoice Report Listing',
              'Purchase History',
              'Consumption History'

            ]
          },
          
          
        ]
      }
    ],
    color: 'premium1',
    class: 'pre1',
    class1: 'reg1'
  },
  {
    name: 'Salary Books',
    type: 'PRO',
    price: '2400',
    perEmployee: '₹80',
    maxEmployees: '30',
    content: "Includes everything in Essentials Plan plus",
    sections: [
      {
        features: [
          'Biometric Attendance',
          'Salary Calculator',
          {
            name: 'Incentive Management',
            subFeatures: [
              'Apply Incentive',
              'Incentive Report Listing'

            ]
          },
             {
            name: 'Bonus Management',
            subFeatures: [
              'Apply Bonus',
              'Bonus Report',
              'Bonus Slip'

            ]
          },
               {
            name: 'Advance Management',
            subFeatures: [
              'Apply/Manage Advance',
              'Advance Report'

            ]
          },
               {
            name: 'TDS Management',
            subFeatures: [
             'Apply/Approve',
              'TDS Report',
              'TDS Declaration'

            ]
          },
          
          'Shift Management',
               {
            name: 'Lay Off Management',
            subFeatures: [
              'Apply Lay Off',
              'Lay Off Report'
            ]
          },
          
          'Payroll Reports',
          'Attendance Report',
          'Bonus Report',
          'Incentive Report',
          'Advance Report',
          'Leave Encashment Report',
          'Leave Report',
          'Shift Bank Report',
          'Shift Earning Report',
          'Shift Duty Report',
          'Lay Off Report',
          'Reimbursement Report',
               {
            name: 'Appraisal',
            subFeatures: [
              'Apply Appraisal',
              'Appraisal Report'
            ]
          },
             {
            name: 'Audit',
            subFeatures: [
              'PF Summary Report',
              'ESIC Summary Report',
              'Variance Report',
              'Summary Briefcase'
            ]
          },
             {
            name: 'Expense Management',
            subFeatures: [
              'Apply Reimbursement',
              'Run Reimbursement',
              'Reimbursement Report'
            ]
          },
          
        ]
      }
    ],
    color: 'premium2',
    class: 'pre2',
    class1: 'reg2'
  },
  {
    name: 'Final Payroll',
    type: 'RETAINER',
    price: '3300',
    perEmployee: '₹110',
    maxEmployees: '30',
    content: "Includes everything in Pro Plan plus",
    sections: [
      {
        features: [
          'EPFO Challan (on Govt. Portal)',
          'ESIC Challan (on Govt. Portal)',
          'P.Tax Return',
          'Joining of employees on ESIC Portal',
          'Exit of employees on ESIC Portal',
          'Joining of employees on EPFO Portal',
          'Exit of employees on EPFO Portal',
          'Company Information handling on ESIC Portal',
          'Company Information handling on EPFO Portal',
          'Signatory DSC UPDATING on EPFO Portal',
          'Subsidy Advisory',
          'P.Tax Return',
          'LWF Return',
          'Gratuity Calculations',
          'Salary Structure Designing',
          'Minimum Wages Update'
        ]
      }
    ],
    color: 'premium3',
    class: 'pre3',
    class1: 'reg3'
  },
  {
    name: 'TPP Outsourcing',
    type: 'RETAINER+',
    price: '4500',
    perEmployee: '₹150',
    maxEmployees: '30',
    content: "Includes everything in Retainer Plan plus",
    sections: [
      {
        features: [
          'Employee Claim Support',
          'Employee KYC updating ESIC Portal',
          'Employee Family updating ESIC Portal',
          'Employee KYC updating EPFO Portal',
          'Response to Notices from ESIC',
          'Response to Notices from EPFO',
          'Response to Notices from P.Tax',
          'Bonus Calculation'
        ]
      }
    ],
    color: 'premium4',
    class: 'pre4',
    class1: 'reg4'
  },
];

const Pricing = () => {
  const [openFeature, setOpenFeature] = useState(null);

  const toggleFeature = (index) => {
    setOpenFeature(openFeature === index ? null : index);
  };

  return (
    <>
      <div className='full'>
        <div className='pheader'>
        <h2 className="pricing-title">
          <strong>Clear, Transparent Pricing for </strong><span>Hassle–Free Payroll</span>
        </h2>
        <p className="pricing-subtitle">
          <span>Pay only for the features you need </span>— upgrade anytime as you grow.
        </p>
      </div>
      <div className='full-container'>
      <div className="pricing-container">
        {plans.map((plan, index) => (
          <div className={`pricing-card ${plan.color}`} key={index}>
            <div className="topbar">
              <img className="pricing-photo" src={logo1} alt="Logo" />
              <div className="pricing-card-header"><strong>{plan.type}</strong></div>
              <div className="pricing-price">₹ {plan.price}</div>
              <p className="pricing-sub-text">
                Up to {plan.maxEmployees} employees/month
              </p>
              <hr />
              <p className="pricing-sub-text-next">
                <span className="price-amount">
                  <strong>{plan.perEmployee}</strong>
                </span>
                <span className="price-description">
                /month(per additional employee)
                </span>
              </p>
              <hr />
              <strong>
                <p className='content'>{plan.content}</p>
              </strong>
              <hr className='content-line' />
            </div>

            <div className="pricing-features">
              <ul className="features-list">
                {plan.sections[0].features.map((feature, featIndex) => {
                  if (typeof feature === 'string') {
                    return (
                      <li key={featIndex}>
                        <span className="tik">✔</span> <span></span>{feature}
                      </li>
                    );
                  } else {
                    return (

                      <li key={featIndex} onClick={() => toggleFeature(featIndex)} style={{ cursor: "pointer" }}>
                        <button className={`toggle-button ${openFeature === featIndex ? 'expanded' : ''}`}

                        >
                          <span className="tik">✔</span> {feature.name}
                        </button>
                        {openFeature === featIndex && (
                          <ul className="sub-features">
                            {feature.subFeatures.map((sub, subIndex) => (
                              <li key={subIndex} className="sub-feature-item">
                                {sub}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  }
                })}
              </ul>
              {/* <hr className={plan.class1}  />  */}
                 <div className={plan.class1} >
                <button className={plan.class}>Schedule Demo</button>
                </div>
                </div>
                </div>
        ))}
      </div>
      </div>
        <div className="critical-events-container">
      {/* Top Banner */}
      <div className="top-banner">
        <div className="banner-content">
          <img src={logo2} alt="Mobile App" className="banner-image" />
          <div className="banner-text">
            <h2>Employee Mobile App at ₹10 per employee per month</h2>
            <p>Available from the SalaryBooks PRO Plan</p>
          </div>
        </div>
      </div>

      {/* Rare Critical Events Section */}
      <div className="events-section">
        <h2 className="events-title">Rare Critical/Complex Events</h2>
        <p className="events-subtitle">
            These services are not included in retainership package but available on case-
          <br />
          to-case basis fee.
        </p>

        <div className="events-list">
          <ul>
            <li>Visit to ESIC department</li>
            <li>Visit to EPFO department</li>
            <li>Visit to P. Tax department</li>
            <li>Preparation for data for ESIC audit/inspection</li>
            <li>Preparation for data for EPFO audit/inspection</li>
          </ul>
          <ul>
            <li>Complex Employee support case.</li>
            <li>Registrations</li>
            <li>Reviews</li>
            <li>Past liability calculations</li>
            <li>Compliance of contractors</li>
          </ul>
        </div>

        <p className="events-footer">
          <strong>These are only available for <span className="highlight">existing</span> SalaryBooks Clients.</strong>
        </p>
      </div>
      </div>
      </div>
    </>
   
  );
};

export default Pricing;
