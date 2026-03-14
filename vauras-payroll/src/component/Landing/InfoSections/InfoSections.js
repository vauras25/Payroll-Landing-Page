import React from "react";
import "./InfoSections.css";
import Benefits from '../../../image/Web_Imgs/Benefits.png'
import hr_Payroll from '../../../image/Web_Imgs/hr_Payroll.png'
import how_salarybooks from '../../../image/Web_Imgs/how_salarybooks.png'
import accounts_1 from '../../../image/Web_Imgs/accounts_1.png';
function DecorativeBox({ className, color, variant }) {
  color = color || "#ecf3fa";
  variant = variant || 1;

  const boxStyle = (left, top) => ({
    position: "absolute",
    borderRadius: "2px",
    width: "99px",
    height: "99px",
    left,
    top,
    backgroundColor: color,
  });

  const renderVariant = () => {
    if (variant === 1) {
      return (
        <>
          <div style={boxStyle(0, "99px")} />
          <div style={boxStyle("99px", 0)} />
          <div style={boxStyle("99px", "198px")} />
        </>
      );
    }
    if (variant === 2) {
      return (
        <>
          <div style={boxStyle("99px", "99px")} />
          <div style={boxStyle(0, 0)} />
          <div style={boxStyle(0, "198px")} />
        </>
      );
    }
    if (variant === 3) {
      return (
        <div style={{ width: 297, height: 198, position: "relative" }}>
          <div style={boxStyle("99px", 0)} />
          <div style={boxStyle("198px", "99px")} />
          <div style={boxStyle(0, "99px")} />
        </div>
      );
    }
    return (
      <div style={{ width: 198, height: 297, position: "relative" }}>
        <div style={boxStyle(0, 0)} />
        <div style={boxStyle("99px", "99px")} />
        <div style={boxStyle(0, "198px")} />
      </div>
    );
  };

  return (
    <div
      className={className}
      style={{
        position: "absolute",
        pointerEvents: "none",
        width: 198,
        height: 297,
      }}
    >
      {renderVariant()}
    </div>
  );
}

function DecorativeStar868({ className, color }) {
  color = color || "#D9D9D9";
  return (
    <div
      className={className}
      style={{ position: "absolute", pointerEvents: "none" }}
    >
      <svg
        style={{ width: "100%", height: "100%" }}
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 868.018 868.018"
      >
        <g opacity="0.4">
          <path
            d="M434.009 0L440.147 427.871L868.018 434.009L440.147 440.147L434.009 868.018L427.871 440.147L0 434.009L427.871 427.871L434.009 0Z"
            fill={color}
          />
          <path
            d="M435.019 366.227L462.746 407.293L503.812 435.02L462.746 462.748L435.019 503.814L407.291 462.748L366.225 435.02L407.291 407.293L435.019 366.227Z"
            fill={color}
          />
        </g>
      </svg>
    </div>
  );
}

function DecorativeStar780({ className, color }) {
  color = color || "#D9D9D9";
  return (
    <div
      className={className}
      style={{ position: "absolute", pointerEvents: "none" }}
    >
      <svg
        style={{ width: "100%", height: "100%" }}
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 780.619 780.619"
      >
        <g opacity="0.4">
          <path
            d="M390.31 0L395.829 384.79L780.619 390.31L395.829 395.829L390.31 780.619L384.79 395.829L0 390.31L384.79 384.79L390.31 0Z"
            fill={color}
          />
          <path
            d="M391.219 329.352L416.154 366.283L453.086 391.219L416.154 416.154L391.219 453.086L366.283 416.154L329.352 391.219L366.283 366.283L391.219 329.352Z"
            fill={color}
          />
        </g>
      </svg>
    </div>
  );
}


const INFO_BLOCKS = [
  {
    title: "How SalaryBooks Payroll Software Works?",
    desc1:
      "SalaryBooks payroll software simplifies HR tasks with an intuitive cloud-based platform. Start by uploading employee data, including salaries, allowances, and deductions. The system automatically calculates gross pay, taxes, PF, and ESI based on Indian regulations.",
    desc2:
      "Integrated HR management software tracks attendance via biometric or mobile check-ins, syncing real-time data. Generate automated payslips, handle leave management, and process bulk payments seamlessly.",
    desc3:
      "As advanced HR payroll software, it offers dashboards for insights, statutory reports like Form 16, and error-free e-filing. With self-service features, secure access, and a paperless setup, payroll reduces time for SMEs and enterprises in India.",
    image:how_salarybooks,
    reversed: false,
  },
  {
    title: "Benefits of Payroll Software",
    desc1:
      "Payroll software transforms tedious manual processes into automated efficiency, a vital Indian businesses team space. Key advantages include accurate salary calculations, reducing errors in taxes, PT, and gratuity by up to 99%.",
    desc2:
      "Integrated HR management software enhances the base piece by offering compliance with changing laws, auto-generating TDS reports and payslips. It cuts costs by eliminating paper-based systems and minimizes penalties from audits.",
    desc3:
      "Boost productivity with real-time analytics on attendance, leaves, and expenses. Employees access self-service portals for payslips, improving satisfaction. Scalable for startups to enterprises, it ensures secure data storage and seamless multi-location support, driving growth without friction.",
    image:Benefits,
    reversed: true,
  },
  {
    title: "HR Payroll Software in India - How to Choose",
    desc1:
      "Selecting the right payroll software demands focus on India-specific needs. Prioritize payroll management software with PT, PF, ESI automation, and GST compliance to avoid fines.",
    desc2:
      "Evaluate HRMS & payroll software for integration like attendance biometrics, employee self-service portals, and mobile apps. Check scalability for growing teams and cloud access for remote work.",
    desc3:
      "Assess user-friendly interfaces, 24/7 support, and data security with encryption. Read reviews for reliability, trial demos, and pricing, opt for affordable, no-hidden-fee options. SalaryBooks excels here, offering robust features tailored for Indian SMEs without complexity.",
    image:hr_Payroll,
    reversed: false,
  },
  {
    title: "Why SalaryBooks is the Best Payroll Software?",
    desc1:
      "SalaryBooks stands out as premier payroll software, blending affordability with power for Indian businesses. Its intuitive payroll application automates salaries, taxes (PF, ESI), and payslips in minutes, ensuring 100% compliance.",
    desc2:
      "Unlike basic tools, it integrates HR modules for attendance, leaves, and appraisals seamlessly. Cloud-based access means no installations, work from anywhere with robust mobile support.",
    desc3:
      "Known with bank-grade encryption, it offers unlimited users, custom reports, and expert support. Thousands trust its 99.9% uptime and free trial. Choose SalaryBooks for error-free payroll, and save up to 70% in processing cost.",
    image:accounts_1,
    reversed: true,
  },
];



function InfoSections() {
  return (
    <section className="info-section">

      <DecorativeStar868 className="info-deco-star info-deco-star--left" color="white" />
      <DecorativeStar780 className="info-deco-star info-deco-star--right-top" color="#D9D9D9" />
      <DecorativeStar868 className="info-deco-star info-deco-star--right-bottom" color="#D9D9D9" />

      <DecorativeBox className="info-deco-box" color="#e4f2fb" variant={4} />

      <div className="info-container">
        {INFO_BLOCKS.map((block, i) => (
          <div
            key={i}
            className={`info-block ${block.reversed ? "info-block--reversed" : ""}`}
          >
            <div className="info-text">
              <h3 className="info-title">{block.title}</h3>
              <p className="info-desc">{block.desc1}</p>
              <p className="info-desc">{block.desc2}</p>
              <p className="info-desc">{block.desc3}</p>
            </div>

            <div className="info-image-wrapper">
              <div className="info-image-card">
                <img src={block.image} alt={block.title} className="info-image" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InfoSections;