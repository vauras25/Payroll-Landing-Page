import React from "react";
import "./PracticalFeatures.css";
import { FaUserCog, FaChartBar, FaFileInvoiceDollar, FaUsersCog, FaCogs, FaCalendarAlt, FaMoneyCheckAlt, FaCheckCircle, FaClock, FaRupeeSign ,FaLayerGroup , FaMobileAlt,FaCalculator,FaRegClock,FaFolderOpen} from "react-icons/fa";

const features = [
  {
    icon: <FaUserCog />,
    title: "HR Management Made Easy",
    description: "Manage your entire employee lifecycle — from onboarding to exit — in one place. Handle leave, attendance, advance, and more through a unified dashboard."
  },
  {
    icon: <FaChartBar />,
    title: "Reports & Insights That Matter",
    description: "Access detailed reports on payroll, contractor payouts, reimbursements, and labour compliance filings — all ready for review or export in a click."
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Payslips & Reimbursements",
    description: "Let employees download payslips and request reimbursements right from the dashboard — or via Mobile App. Fast, simple, and user-friendly."
  },
  {
    icon: <FaUsersCog />,
    title: "Custom User Roles & Workflows",
    description: "Set up role-based access for your HR, finance, or admin teams. Build workflows that match your company’s processes from the ground up."
  },
  {
    icon: <FaCogs />,
    title: "ECR Generation",
    description: "The SalaryBooks ECR Generator automates EPF return preparation, ensuring accurate calculations, error-free files, and quick submissions to stay fully compliant."
  },
  {
    icon: <FaCalendarAlt />,
    title: "Automated Arrears & Salary Revisions",
    description: "Easily revise salaries for past or upcoming dates. Arrears are auto-calculated and processed with zero manual effort."
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "One-Click Payroll Processing",
    description: "Pay employees, contractors, and interns directly to their bank accounts with a single click. Always accurate, always on time."
  },
  {
    icon: <FaCheckCircle />,
    title: "Automated PF, ESIC, P. Tax",
    description: "Stay fully compliant with SalaryBooks. We automatically file and pay your TDS, PF, ESIC, and PT — and keep all challans accessible on your dashboard."
  },
  {
    icon: <FaClock />,
    title: "Smart Attendance Integration",
    description: "Track attendance, manage leave approvals, and sync everything seamlessly with payroll."
  },
  {
    icon: <FaRupeeSign />,
    title: "Scheduled Earnings",
    description: "SalaryBooks Scheduled Earnings lets you set up recurring payments like bonuses, incentives, or allowances in advance."
  },
   {
    icon: <FaLayerGroup />,
    title: "Bulk Actions",
    description: "Speed through payroll changes — process bonuses, deductions, or LOP in bulk with our powerful Bulk Wizard."
  },
  {
    icon: <FaMobileAlt />,
    title: "Employee Mobile App",
    description: "With the SalaryBooks Employee App, employees can view payslips, and leave balances anytime, anywhere."
  },
  {
    icon: <FaCalculator />,
    title: "CTC Calculator",
    description: "The SalaryBooks CTC Calculator instantly breaks down salaries into components like basic pay, allowances, and statutory contributions."
  },
  {
    icon: <FaRegClock />,
    title: "Off-cycle Payroll",
    description: "It enables quick and accurate processing of payments outside the regular payroll cycle without disrupting routine operations."
  },
  {
    icon: <FaFolderOpen />,
    title: "Document Management",
    description: "Document Management securely stores and organizes employee records, allowing quick access and easy sharing."
  }
];

export default function Features() {
  return (
    <>
    <div className="fratures_head">
        <h2>Accurately Practical Features</h2>
        <p className="subtext12">
        that simplify payroll & keep Compliance effortless.
      </p>
    </div>
    <div className="features-section">
      
      {features.map((feature, index) => (
        <div className="feature-card" key={index}>
          <div className="feature-icon">{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
    </>
  );
}
