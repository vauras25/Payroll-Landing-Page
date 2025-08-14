import React, { useState, useEffect, useMemo } from "react";
import "./ValueComponent.css";
import personImage from "../../image/person1.avif";
import personImage2 from "../../image/chroimage.avif";
import personImage3 from "../../image/admin.avif";
import personImage4 from "../../image/manager.avif";
import personImage5 from "../../image/employee.avif";
import valuepic1 from "../../image/valuepic1.avif";
import valuepic2 from "../../image/valuepic2.avif";
import valuepic3 from "../../image/valuepic3.avif";
import valuepic4 from "../../image/valuepic4.avif";
import valuepic5 from "../../image/valuepic5.avif";

const ValueComponent = () => {
    const [selectedRole, setSelectedRole] = useState("CIO");

    // // Memoize the roles array to prevent unnecessary recalculations
    // const roles = useMemo(() => [
    //     { name: "CIO", img: valuepic1 },
    //     { name: "CHRO", img: valuepic2 },
    //     { name: "Payroll Admin", img: valuepic3 },
    //     { name: "Managers", img: valuepic4 },
    //     { name: "Employees", img: valuepic5 },
    // ], []); // Empty dependency array means this will only run on mount

    // const currentIndex = roles.findIndex((role) => role.name === selectedRole);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         // Move to the next role, loop back to the start if at the last role
    //         const nextIndex = (currentIndex + 1) % roles.length;
    //         setSelectedRole(roles[nextIndex].name);
    //     }, 6000);

    //     return () => clearInterval(interval); // Cleanup interval on component unmount
    // }, [selectedRole, roles, currentIndex]); // Added 'roles' to the dependency array




    const roles = useMemo(() => [
        { name: "Founder", img: valuepic1 },
        { name: "Managers", img: valuepic4 },
        { name: "Payroll Admin", img: valuepic3 },
        { name: "Accounts", img: valuepic2 },
        { name: "Employees", img: valuepic5 },
    ], []);
    
    // UseMemo is used, so this line won't cause unnecessary re-renders
    const currentIndex = roles.findIndex((role) => role.name === selectedRole);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         // Move to the next role, loop back to the start if at the last role
    //         const nextIndex = (currentIndex + 1) % roles.length;
    //         setSelectedRole(roles[nextIndex].name);
    //     }, 6000);

    //     return () => clearInterval(interval); // Cleanup interval on component unmount
    // }, [selectedRole, currentIndex]); // Removed 'roles' as it’s memoized and won’t change

    useEffect(() => {
        const interval = setInterval(() => {
            // Move to the next role, loop back to the start if at the last role
            const nextIndex = (currentIndex + 1) % roles.length;
            setSelectedRole(roles[nextIndex].name);
        }, 6000);
    
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [roles, currentIndex]);

    return (
        <div className="value-container">
            {/* Heading */}
            <h2>
                Everyone gets value from day 1
            </h2>
            <p className="subtitle">
                A platform loved by everyone in your company - by employers and employees
            </p>

            {/* Role Selector */}
            <div className="roles-container">
                {roles.map((role) => (
                    <div
                        key={role.name}
                        className={`role-card ${selectedRole === role.name ? "active" : ""}`}
                        onClick={() => setSelectedRole(role.name)}
                    >
                        <img src={role.img} alt={role.name} className="role-image" />
                        <p>{role.name}</p>
                    </div>
                ))}
            </div>

            {/* Conditionally Render the Correct Container */}
            {selectedRole === "Founder" && (
                <div className="value-container">
                    <div className="content-container">
                        <div className="left-section">
                            <div className="info-box blue-box">
                                <div className="box-header text-center">SalaryBooks waale</div>
                             <ul>
                                <li><strong>Total Payroll Clarity</strong> – Everyone sees exactly what they need, fostering trust and alignment.</li>
                                <li><strong>Zero Risk of Costly Errors</strong> – Block unauthorized changes before they impact payouts or compliance.</li>
                                <li><strong>Decisions at a Glance</strong> – Clear, concise payroll insights so you can act fast and confidently.</li>
                                <li><strong>One Report, Full Story</strong> – From onboarding to final payout, track the entire payroll cycle in a single view.</li>
                                <li><strong>Freedom to Run Payroll Anywhere</strong> – Approve, review, and manage payroll from any device, any location.</li>
                             </ul>
                            </div>

                            <div className="info-box blue-box">
                               <div className="box-header text-center">Excel Waale</div>
                                <ul>
                                    <li>Payroll feels like a monthly fire drill, pulling you away from running the business.</li>
                                    <li>Sensitive data lives in too many places, increasing the risk of leaks or misuse.</li>
                                    <li>Every decision requires digging through spreadsheets and chasing down numbers.</li>
                                    <li>Reports arrive late or in inconsistent formats, making audits a headache.</li>
                                    <li>Remote approvals and quick fixes are impossible, forcing unnecessary office visits.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="task-container">
                            <img src={personImage} alt="User" className="person-image" />
                        </div>
                    </div>
                </div>
            )}

            {selectedRole === "Accounts" && (
                <div className="value-container">
                    <div className="content-container">
                      <div className="left-section">
                            <div className="info-box blue-box">
                                <div className="box-header text-center">SalaryBooks waale</div>
                                <ul>
                                <li><strong>Instant Bank Payout Sheets</strong> – Automatically generate accurate, ready-to-upload payment files for faster salary disbursement.</li>
                                <li><strong>Reports Built for Accountants</strong> – Structured, compliant, and audit-ready reports that save hours of manual formatting.</li>
                                <li><strong>Complete Documentation</strong> – Every report comes with supporting records for easy verification and compliance checks.</li>
                                <li><strong>Easy Subscription</strong> – Payments & billing automated for ease of accountants.</li>
                               </ul>
                            </div>

                            <div className="info-box blue-box">
                               <div className="box-header text-center">Excel Waale</div>
                          <ul>
                            <li>Bank payout files have to be created manually, increasing processing time and the chance of errors.</li>
                            <li>Reports are often in inconsistent formats, requiring extra effort to make them audit-ready.</li>
                            <li>Supporting documents must be collected separately, slowing down reconciliations.</li>
                            <li>Payment and billing processes are fragmented, creating delays and confusion.</li>
                            </ul>
                            </div>
                        </div>

                        <div className="task-container">
                            <img src={personImage2} alt="User" className="person-image" />
                        </div>
                    </div>
                </div>
            )}

            {selectedRole === "Payroll Admin" && (
                <div className="value-container">
                    <div className="content-container">
                       <div className="left-section">
                            <div className="info-box blue-box">
                                <div className="box-header text-center">SalaryBooks waale</div>
                                <ul>
                                        <li><strong>Automation Does the Hard Work</strong> – The system handles complex payroll processing so the team can focus on review and approval.</li>
                                        <li><strong>Effortless Attendance Tracking</strong> – Automatic integration with biometric systems ensures precise, real-time attendance data.</li>
                                        <li><strong>No More Spreadsheet Chaos</strong> – Eliminate dependency on Excel and centralize all payroll operations in one reliable platform.</li>
                                        <li><strong>Error-Free Calculations</strong> – Built-in checks drastically cut manual mistakes, protecting accuracy and compliance.</li>
                                        <li><strong>No More Repetitive Work</strong> – Routine tasks are automated, freeing up time for higher-value activities.</li>
                                </ul>

                            </div>

                            <div className="info-box blue-box">
                               <div className="box-header text-center">Excel Waale</div>
                           <ul>
                            <li>Payroll staff spend hours on repetitive, manual calculations.</li>
                            <li>Attendance data is pieced together from multiple sources, often late or incomplete.</li>
                            <li>Excel sheets grow complex, error-prone, and hard to track.</li>
                            <li>Small mistakes snowball into payment delays or compliance risks.</li>
                            <li>The same tasks are repeated month after month, wasting valuable time.</li>
                            </ul>
                            </div>
                        </div>

                        <div className="task-container">
                            <img src={personImage3} alt="User" className="person-image" />
                        </div>
                    </div>
                </div>
            )}

            {selectedRole === "Managers" && (
                <div className="value-container">
                    <div className="content-container">
                         <div className="left-section">
                            <div className="info-box blue-box">
                                <div className="box-header text-center">SalaryBooks waale</div>
                         <ul>
                        <li><strong>Effortless Policy Rollout</strong> – Implement payroll and HR policies from the top down, ensuring consistent compliance across every team.</li>
                        <li><strong>Detailed Cost Center Segregation</strong></li>
                        <li><strong>Accuracy You Can Trust</strong> – Automated calculations and validations reduce human error and strengthen financial reliability.</li>
                        <li><strong>Tailored Reporting</strong> – Generate the exact reports management needs for strategic planning. Customizable reports deliver exactly the insights management needs—no extra work required.</li>
                        <li><strong>Managed Exceptions</strong> – Deviations are flagged, controlled, and approved before they create problems, keeping processes efficient and risk-free.</li>
                        </ul>

                            </div>

                            <div className="info-box blue-box">
                               <div className="box-header text-center">Excel Waale</div>
                              <ul>
                                <li>Policy updates get lost in translation, causing inconsistent payroll practices across teams.</li>
                                <li>Payroll costs blur together, making it hard to see which departments are in terms of compliance and costs.</li>
                                <li>Manual checks still leave room for costly miscalculations.</li>
                                <li>Reports are generic, forcing managers to manipulate data before it’s useful.</li>
                                <li>Deviations slip through unnoticed until they cause financial or compliance headaches.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="task-container">
                            <img src={personImage4} alt="User" className="person-image" />
                        </div>
                    </div>
                </div>
            )}



            {selectedRole === "Employees" && (
                <div className="value-container">
                    <div className="content-container">
                       <div className="left-section">
                            <div className="info-box blue-box">
                                <div className="box-header text-center">SalaryBooks waale</div>
                              <ul>
                                <li><strong>Instant Payslip Access</strong> – Employees can download their payslips anytime without HR follow-ups.</li>
                                <li><strong>Real-Time Attendance View</strong> – See attendance records instantly, reducing disputes and confusion.</li>
                                <li><strong>Quick Leave Applications</strong> – Apply and track leave requests online with instant status updates.</li>
                                <li><strong>Hassle-Free Reimbursement Requests</strong> – Submit claims digitally and track approval progress.</li>
                                <li><strong>Easy Salary Advance Requests</strong> – Apply for advances in just a few clicks, with clear repayment terms.</li>
                                <li><strong>Full Payroll Transparency</strong> – Clear, transparent payroll data builds trust and reduces employee queries.</li>
                               </ul>

                            </div>

                            <div className="info-box blue-box">
                               <div className="box-header text-center">Excel Waale</div>
                              <ul>
                                <li>Payslips take days to receive, leading to repeated HR follow-ups.</li>
                                <li>Attendance records are unclear, causing disputes and mistrust.</li>
                                <li>Leave applications require manual forms or long email chains.</li>
                                <li>Reimbursement requests get delayed or lost in paperwork.</li>
                                <li>Salary advance requests involve multiple approvals and long wait times.</li>
                                <li>Lack of transparency fuels frustration and increases HR workload.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="task-container">
                            <img src={personImage5} alt="User" className="person-image" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ValueComponent;
