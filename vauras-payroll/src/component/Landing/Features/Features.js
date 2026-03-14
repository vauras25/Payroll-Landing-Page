import React, { useState } from "react";
import "./Features.css";
import { FaUserCog, FaChartBar, FaFileInvoiceDollar, FaUsersCog, FaCogs, FaCalendarAlt, FaMoneyCheckAlt, FaCheckCircle, FaClock, FaRupeeSign ,FaLayerGroup , FaMobileAlt,FaCalculator,FaRegClock,FaFolderOpen} from "react-icons/fa";

const FEATURES = [
  {
    icon: <FaUserCog size={28} />,
    title: "HR Management Made Easy",
    desc: "Manage your entire employee lifecycle — from onboarding to exit — in one place. Handle leave, attendance, advance, and more through a unified dashboard."
  },
  {
    icon: <FaChartBar size={28} />,
    title: "Reports & Insights That Matter",
    desc: "Access detailed reports on payroll, contractor payouts, reimbursements, and labour compliance filings — all ready for review or export in a click."
  },
  {
    icon: <FaFileInvoiceDollar size={28} />,
    title: "Payslips & Reimbursements",
    desc: "Let employees download payslips and request reimbursements right from the dashboard — or via Mobile App. Fast, simple, and user-friendly."
  },
  {
    icon: <FaUsersCog size={28} />,
    title: "Custom User Roles & Workflows",
    desc: "Set up role-based access for your HR, finance, or admin teams. Build workflows that match your company’s processes from the ground up."
  },
  {
    icon: <FaCogs size={28} />,
    title: "ECR Generation",
    desc: "The SalaryBooks ECR Generator automates EPF return preparation, ensuring accurate calculations, error-free files, and quick submissions to stay fully compliant."
  },
  {
    icon: <FaCalendarAlt size={28} />,
    title: "Automated Arrears & Salary Revisions",
    desc: "Easily revise salaries for past or upcoming dates. Arrears are auto-calculated and processed with zero manual effort."
  },
  {
    icon: <FaMoneyCheckAlt size={28} />,
    title: "One-Click Payroll Processing",
    desc: "Pay employees, contractors, and interns directly to their bank accounts with a single click. Always accurate, always on time."
  },
  {
    icon: <FaCheckCircle size={28} />,
    title: "Automated PF, ESIC, P. Tax",
    desc: "Stay fully compliant with SalaryBooks. We automatically file and pay your TDS, PF, ESIC, and PT — and keep all challans accessible on your dashboard."
  },
  {
    icon: <FaClock size={28} />,
    title: "Smart Attendance Integration",
    desc: "Track attendance, manage leave approvals, and sync everything seamlessly with payroll."
  },
  {
    icon: <FaRupeeSign size={28} />,
    title: "Scheduled Earnings",
    desc: "SalaryBooks Scheduled Earnings lets you set up recurring payments like bonuses, incentives, or allowances in advance."
  },
   {
    icon: <FaLayerGroup size={28} />,
    title: "Bulk Actions",
    desc: "Speed through payroll changes — process bonuses, deductions, or LOP in bulk with our powerful Bulk Wizard."
  },
  {
    icon: <FaMobileAlt size={28} />,
    title: "Employee Mobile App",
    desc: "With the SalaryBooks Employee App, employees can view payslips, and leave balances anytime, anywhere."
  },
  {
    icon: <FaCalculator size={28} />,
    title: "CTC Calculator",
    desc: "The SalaryBooks CTC Calculator instantly breaks down salaries into components like basic pay, allowances, and statutory contributions."
  },
  {
    icon: <FaRegClock size={28} />,
    title: "Off-cycle Payroll",
    desc: "It enables quick and accurate processing of payments outside the regular payroll cycle without disrupting routine operations."
  },
  {
    icon: <FaFolderOpen size={28} />,
    title: "Document Management",
    desc: "Document Management securely stores and organizes employee records, allowing quick access and easy sharing."
  }
];

function FeatureCard({ feature }) {
  const [flipped, setFlipped] = useState(false);

  const isTouchDevice = () => window.matchMedia("(hover: none)").matches;

  return (
    <div
      className="feature-card-outer"
      onMouseEnter={() => {
        if (!isTouchDevice()) setFlipped(true);
      }}
      onMouseLeave={() => {
        if (!isTouchDevice()) setFlipped(false);
      }}
      onClick={() => {
        if (isTouchDevice()) setFlipped((f) => !f);
      }}
    >
      <div className={`feature-card-inner${flipped ? " flipped" : ""}`}>
        <div className="feature-card-face feature-card-front">
          <div className="feature-icon-wrapper">{feature.icon}</div>
          <h4 className="feature-title">{feature.title}</h4>
        </div>

        <div className="feature-card-face feature-card-back">
          <div className="feature-icon-wrapper feature-icon-wrapper--back">
            {feature.icon}
          </div>
          <p className="feature-back-desc">{feature.desc}</p>
        </div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <div className="features-section-new">
      <div className="features-heading">
        <h3>Accurately Practical Key Features</h3>
      </div>
      <div className="features-grid">
        {FEATURES.map((feature, i) => (
          <FeatureCard key={i} feature={feature} />
        ))}
      </div>
    </div>
  );
}

export default Features;