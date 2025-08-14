import React, { useState } from "react";
import "./TimeTrackingSection.css";
// import { FaClipboardList, FaUsers } from "react-icons/fa"; 
import employeeDash from "../image/employee_dash.jpg"; 
import dashboard from "../image/Desktop_80_SIDE.jpg"; 
import company_sett from "../image/Company_settings.jpg"; 
import biometric from "../image/Biometric_Sync.jpg"; 
import attendenceUpload from "../image/Attendance_Upload_Edit.jpg"; 
import salaryCal from "../image/Salary_Calculator.jpg"; 
import salaryReport from "../image/Salary_Report.jpg"; 

import dashIcon from "../image/DASHBOARD_ICON.png";
import companyIcon from "../image/COMPANY_SETTINGS_ICON.png";
import biometricIcon from "../image/BIOMETRIC_SYNC_ICON.png";
// import bonusIcon from "../image/bonus_ICON.png";
// import incentiveIcon from "../image/apply_incentive_icon.png";
import employeeIcon from "../image/employees_icon.png";
import salaryCalIcon from "../image/SALARY_CALCULATOR_ICON.png";
import salaryRepIcon from "../image/salary_report_icon.png";
// import advanceIcon from "../image/advance_icon.png";
import attendanceIcon from "../image/attendance_management.png";
// import incentive1 from "../image/incentive1.jpg"; 
// import incentive2 from "../image/incentive2.jpg"; 
import salaryBook from "../image/sbhome.png";

const TimeTrackingSection = () => { 
  const [selectedMenu, setSelectedMenu] = useState("Employees");

  const images = {
    "Company Settings": company_sett,
    "Dashboard": dashboard,
    "Employees": employeeDash,
    "Attendance (Upload/Edit)": attendenceUpload,
    "Biometric Sync": biometric,
    "Salary Calculator": salaryCal,
    "Salary Report": salaryReport,
    "Incentive": salaryCal,
    "Bonus": salaryCal,
    "Advance": salaryCal,
    "Salary Revision": salaryCal,
    "Overtime": salaryCal,
    "Leave": salaryCal,
    "TDS": salaryCal,
    "Shift Management": salaryCal,
    "LayOff": salaryCal,
    "Payment Instruction": salaryCal,
    // "Incentive Management": incentive1,
    // "Incentive Report": incentive2,
  };

  return (
    <div className="body1">
      <div className="heading">
      {/* <h2 >Seamless <span className="heading-part">payroll solutions</span> for global teams.</h2> */}
      <h2 >Access Payroll Anywhere, Anytime - 24/7</h2>
      <p className="heading-part2">Reports and Modules for everyone in your company from Founder to Labours</p>
    </div>
    <div className="time-scope">
      
      <div className="full-time-track">
      <div className="text-center">
            <p>
             <span className="bold">{selectedMenu} - </span> Manage your {selectedMenu.toLowerCase()} efficiently and boost productivity with SalaryBooks
            </p>
      </div>
     
      <div className="time-tracking-container">
       
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-logo">
            <img src={salaryBook} alt="salary books" />
            {/* <h3>Salary Books</h3> */}
          </div>
          <ul className="sidebar-menu">
            <li 
              onClick={() => setSelectedMenu("Company Settings")} 
              className={selectedMenu === "Company Settings" ? "active" : ""}
            >
              <img src={companyIcon} alt="Settings Icon" className="menu-icon" /> Company Settings
            </li>
            <li 
              onClick={() => setSelectedMenu("Dashboard")} 
              className={selectedMenu === "Dashboard" ? "active" : ""}
            >
              <img src={dashIcon} alt="Dashboard Icon" className="menu-icon" /> Dashboard
            </li>
            <li 
              onClick={() => setSelectedMenu("Employees")} 
              className={selectedMenu === "Employees" ? "active" : ""}
            >
              <img src={employeeIcon} alt="Employee Icon" className="menu-icon" /> Employees
            </li>
             <li 
              onClick={() => setSelectedMenu("Attendance (Upload/Edit)")} 
              className={selectedMenu === "Attendance (Upload/Edit)" ? "active" : ""}
            >
               <img src={attendanceIcon} alt="Attendance Icon" className="menu-icon" /> Attendance (Upload/Edit)
            </li>
             <li 
              onClick={() => setSelectedMenu("Biometric Sync")} 
              className={selectedMenu === "Biometric Sync" ? "active" : ""}
            >
            <img src={biometricIcon} alt="Biometric Icon" className="menu-icon" /> Biometric Sync
            </li>
            <li 
              onClick={() => setSelectedMenu("Salary Report")} 
              className={selectedMenu === "Salary Report" ? "active" : ""}
            >
             <img src={salaryRepIcon} alt="Salary Report Icon" className="menu-icon" /> Salary Report
            </li>
            <li 
              onClick={() => setSelectedMenu("Salary Calculator")} 
              className={selectedMenu === "Salary Calculator" ? "active" : ""}
            >
              <img src={salaryCalIcon} alt="Salary Calculator Icon" className="menu-icon" /> Salary Calculator
            </li>
            {/* <li 
              onClick={() => setSelectedMenu("Incentive")} 
              className={selectedMenu === "Incentive" ? "active" : ""}
            >
              <img src={incentiveIcon} alt="Incentive Icon" className="menu-icon" /> Apply Incentive
            </li> */}
            {/* <li 
              onClick={() => setSelectedMenu("Bonus")} 
              className={selectedMenu === "Bonus" ? "active" : ""}
            >
             <img src={bonusIcon} alt="Bonus Icon" className="menu-icon" /> Bonus
            </li> */}
            {/* <li 
              onClick={() => setSelectedMenu("Advance")} 
              className={selectedMenu === "Advance" ? "active" : ""}
            >
              <img src={advanceIcon} alt="Biometric Icon" className="menu-icon" /> Advance (Apply/Manage)
            </li> */}
            {/* <li 
              onClick={() => setSelectedMenu("Salary Revision")} 
              className={selectedMenu === "Salary Revision" ? "active" : ""}
            >
              <FaClipboardList className="menu-icon" /> Salary Revision
            </li>
            <li 
              onClick={() => setSelectedMenu("Overtime")} 
              className={selectedMenu === "Overtime" ? "active" : ""}
            >
              <FaClipboardList className="menu-icon" /> Overtime
            </li>
            <li 
              onClick={() => setSelectedMenu("Leave")} 
              className={selectedMenu === "Leave" ? "active" : ""}
            >
              <FaClipboardList className="menu-icon" /> Leave
            </li>
            <li 
              onClick={() => setSelectedMenu("TDS")} 
              className={selectedMenu === "TDS" ? "active" : ""}
            >
              <FaClipboardList className="menu-icon" /> TDS
            </li>
            <li 
              onClick={() => setSelectedMenu("Shift Management")} 
              className={selectedMenu === "Shift Management" ? "active" : ""}
            >
              <FaClipboardList className="menu-icon" /> Shift Management
            </li>
            <li 
              onClick={() => setSelectedMenu("LayOff")} 
              className={selectedMenu === "LayOff" ? "active" : ""}
            >
              <FaClipboardList className="menu-icon" /> LayOff
            </li>
            <li 
              onClick={() => setSelectedMenu("Payment Instruction")} 
              className={selectedMenu === "Payment Instruction" ? "active" : ""}
            >
              <FaClipboardList className="menu-icon" /> Payment Instruction
            </li> */}
           
            {/* <li 
              onClick={() => setSelectedMenu("Incentive Management")} 
              className={selectedMenu === "Incentive Management" ? "active" : ""}
            >
              <FaDollarSign className="menu-icon" /> Incentive Management
            </li>
            <li 
              onClick={() => setSelectedMenu("Incentive Report")} 
              className={selectedMenu === "Incentive Report" ? "active" : ""}
            >
              <FaFileInvoice className="menu-icon" /> Incentive Report
            </li> */}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="content">
          <div className="content-box">
            
            <div className="dashboard-preview">
              <img src={images[selectedMenu]} alt={selectedMenu} />
            </div>
          </div>
        </main>
      </div>
      </div>
    </div>
    </div>
  );
};

export default TimeTrackingSection;