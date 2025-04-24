import React from 'react';
import './priceing.css'; // Import CSS file

const Priceing = () => {
  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <h1>Pricing Plans</h1>
      </div>

      {/* First Row - Two Columns for "Salary Books" and "Final Payroll" */}
      <div className="pricing-row">
        <div className="pricing-column">
          <h2>Salary Books</h2>
        </div>
        <div className="pricing-column">
          <h2>Final Payroll</h2>
        </div>
      </div>

      {/* Second Row - All 6 Cards in One Row */}
      <div className="pricing-row">
        {/* First Column - Three Cards under Salary Books */}
        <div className="pricing-column">
          <div className="pricing-card basic">
            <h2>Basic</h2>
            <p>₹ 4250 / Month</p>
            <p>For 50 Users</p>
            <p>Additional User ₹85/Month</p>
            <div className="features">
              <ul>
                <li>Core HR</li>
                <li>Multi-legal entity</li>
                <li>Time Office</li>
                <li>Geo-tagging/fencing</li>
                <li>Selfie-attendance</li>
               
              </ul>
            </div>
          </div>

          <div className="pricing-card professional">
            <h2>Professional</h2>
            <p>₹ 5750 / Month</p>
            <p>For 50 Users</p>
            <p>Additional User ₹115/Month</p>
            <div className="features">
              <ul>
                <li>Everything in Basic+</li>
                <li>Workforce</li>
                <li>Onboarding (pre/post)</li>
                <li>Induction</li>
                <li>Confirmation</li>
                <li>Transfer</li>
                <li>Separation</li>
                <li>Digital acknowledgement of letters/policies</li>
              </ul>
            </div>
          </div>

          <div className="pricing-card enterprise">
            <h2>Enterprise</h2>
            <p>Custom</p>
            <p>For 50+ Team</p>
            <p>Get a Quote As Per Your Selection</p>
            <div className="features">
              <ul>
                <li>Everything in Professional+</li>
                <li>Recruitment</li>
                <li>Performance</li>
                <li>Engagement</li>
                <li>Expense</li>
                <li>Asset</li>
                <li>Helpdesk</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Second Column - Three Cards under Final Payroll */}
        <div className="pricing-column">
          <div className="pricing-card enterprise">
            <h2>Enterprise</h2>
            <p>Custom</p>
            <p>For 50+ Team</p>
            <p>Get a Quote As Per Your Selection</p>
            <div className="features">
              <ul>
                <li>Everything in Professional+</li>
                <li>Recruitment</li>
                <li>Performance</li>
                <li>Engagement</li>
                <li>Expense</li>
                <li>Asset</li>
                <li>Helpdesk</li>
              </ul>
            </div>
          </div>

          <div className="pricing-card enterprise">
            <h2>Enterprise</h2>
            <p>Custom</p>
            <p>For 50+ Team</p>
            <p>Get a Quote As Per Your Selection</p>
            <div className="features">
              <ul>
                <li>Everything in Professional+</li>
                <li>Recruitment</li>
                <li>Performance</li>
                <li>Engagement</li>
                <li>Expense</li>
                <li>Asset</li>
                <li>Helpdesk</li>
              </ul>
            </div>
          </div>

          <div className="pricing-card enterprise">
            <h2>Enterprise</h2>
            <p>Custom</p>
            <p>For 50+ Team</p>
            <p>Get a Quote As Per Your Selection</p>
            <div className="features">
              <ul>
                <li>Everything in Professional+</li>
                <li>Recruitment</li>
                <li>Performance</li>
                <li>Engagement</li>
                <li>Expense</li>
                <li>Asset</li>
                <li>Helpdesk</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Priceing;
